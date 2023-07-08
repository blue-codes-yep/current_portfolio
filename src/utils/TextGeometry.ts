import { ExtrudeGeometry, ExtrudeGeometryOptions } from 'three';
import { Font } from './FontLoader';
interface TextGeometryParameters extends ExtrudeGeometryOptions {
    font?: Font;
    size?: number;
    height?: number;
}

class TextGeometry extends ExtrudeGeometry {
    public geometryType: string;
    
    constructor(text: string, parameters: TextGeometryParameters = {}) {
        const { font, size = 1, height = 50, bevelThickness = 10, bevelSize = 8, bevelEnabled = false } = parameters;

        if (!font) {
            throw new Error('Font is required to create TextGeometry');
        }

        const shapes = font.generateShapes(text, size);

        const extrudeParameters: ExtrudeGeometryOptions = {
            depth: height,
            bevelThickness,
            bevelSize,
            bevelEnabled,
        };

        super(shapes, extrudeParameters);

        this.geometryType = 'TextGeometry';
    }
}

export { TextGeometry };
