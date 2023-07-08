import { useState, useEffect } from 'react';
import { FontLoader, Font } from '../utils/FontLoader';
import TextMaterial from './TextMaterial';
import { TextGeometry } from '../utils/TextGeometry';

function useFont(url: string) {
    const [font, setFont] = useState<Font | null>(null);

    useEffect(() => {
        const loader = new FontLoader();
        loader.load(url, setFont);
    }, [url]);

    return font;
}
interface TextTextureProps {
    text: string;
    color?: string;
    fontSize?: number;
}

function TextTexture({ text, fontSize = 1, ...props }: TextTextureProps) {
    const font = useFont('/fonts/Belanosima_Regular.json');
    const geometry = font ? new TextGeometry(text, { font, size: fontSize, height: 0.2 }) : null;

    return geometry ? (
        <mesh geometry={geometry} {...props}>
            <TextMaterial text={text} />
        </mesh>
    ) : null;
}

export default TextTexture;