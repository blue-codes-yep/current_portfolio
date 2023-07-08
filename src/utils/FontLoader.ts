import {
    FileLoader,
    Loader,
    LoadingManager,
    ShapePath
} from 'three';
import * as THREE from 'three';

interface Glyph {
    o: string;
    _cachedOutline: string[];
    ha: number;
}

interface FontData {
    resolution: number;
    boundingBox: { yMax: number; yMin: number; };
    underlineThickness: number;
    glyphs: { [key: string]: Glyph };
    familyName: string;
}

class FontLoader extends Loader {
    manager: LoadingManager;

    constructor(manager?: LoadingManager) {
        super();
        this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;
    }

    load(url: string, onLoad: (font: Font) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void {
        const loader = new FileLoader(this.manager);
        loader.load(url, (text: string | ArrayBuffer) => {
            if (typeof text === 'string') {
                onLoad(this.parse(JSON.parse(text)));
            } else {
                onError?.(new ErrorEvent('Failed to load font: expected a string response.'));
            }
        }, onProgress, onError);
    }

    parse(json: any): Font {
        return new Font(json);
    }

    loadAsync(url: string): Promise<Font> {
        return new Promise((resolve, reject) => {
            this.load(url, resolve, undefined, reject);
        });
    }
}

class Font {
    [x: string]: any;

    constructor(data: FontData) {
        this.isFont = true;
        this.type = 'Font';
        this.data = data;
    }

    generateShapes(text: string, size = 100) {
        const shapes = [];
        const paths = createPaths(text, size, this.data);

        for (let p = 0, pl = paths.length; p < pl; p++) {
            shapes.push(...paths[p].toShapes(false));
        }

        return shapes;
    }
}


function createPaths(text: string, size: number, data: FontData) {

    const chars = Array.from(text);
    const scale = size / data.resolution;
    const line_height = (data.boundingBox.yMax - data.boundingBox.yMin + data.underlineThickness) * scale;

    const paths = [];

    let offsetX = 0, offsetY = 0;

    for (let i = 0; i < chars.length; i++) {

        const char = chars[i];

        if (char === '\n') {

            offsetX = 0;
            offsetY -= line_height;

        } else {

            const ret = createPath(char, scale, offsetX, offsetY, data);
            if (ret) {
                offsetX += ret.offsetX;
                paths.push(ret.path);
            }

        }

    }

    return paths;

}

function createPath(char: string, scale: number, offsetX: number, offsetY: number, data: FontData) {

    const glyph = data.glyphs[char] || data.glyphs['?'];

    if (!glyph) {

        console.error('THREE.Font: character "' + char + '" does not exists in font family ' + data.familyName + '.');

        return;

    }

    const path = new ShapePath();

    let x, y, cpx, cpy, cpx1, cpy1, cpx2, cpy2;

    if (glyph.o) {

        const outline = glyph._cachedOutline || (glyph._cachedOutline = glyph.o.split(' '));

        for (let i = 0, l = outline.length; i < l;) {

            const action = outline[i++];

            switch (action) {

                case 'm': // moveTo
                    x = parseFloat(outline[i++]) * scale + offsetX;
                    y = parseFloat(outline[i++]) * scale + offsetY;
                    path.moveTo(x, y);
                    break;

                case 'l': // lineTo
                    x = parseFloat(outline[i++]) * scale + offsetX;
                    y = parseFloat(outline[i++]) * scale + offsetY;
                    path.lineTo(x, y);
                    break;

                case 'q': // quadraticCurveTo
                    cpx = parseFloat(outline[i++]) * scale + offsetX;
                    cpy = parseFloat(outline[i++]) * scale + offsetY;
                    cpx1 = parseFloat(outline[i++]) * scale + offsetX;
                    cpy1 = parseFloat(outline[i++]) * scale + offsetY;
                    path.quadraticCurveTo(cpx1, cpy1, cpx, cpy);
                    break;

                case 'b': // bezierCurveTo
                    cpx = parseFloat(outline[i++]) * scale + offsetX;
                    cpy = parseFloat(outline[i++]) * scale + offsetY;
                    cpx1 = parseFloat(outline[i++]) * scale + offsetX;
                    cpy1 = parseFloat(outline[i++]) * scale + offsetY;
                    cpx2 = parseFloat(outline[i++]) * scale + offsetX;
                    cpy2 = parseFloat(outline[i++]) * scale + offsetY;
                    path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, cpx, cpy);
                    break;
            }

        }

    }

    return { offsetX: glyph.ha * scale, path: path };

}

export { FontLoader, Font };