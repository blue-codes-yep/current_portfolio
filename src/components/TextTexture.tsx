import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import TextMaterial from './TextMaterial';
import { TextGeometry } from '../utils/TextGeometry';

interface TextTextureProps {
    text: string;
    color?: string;
    fontSize?: number;
}

function TextTexture({ text, fontSize = 1 }: TextTextureProps) {
    const { scene } = useThree();
    console.log(scene);
    return (

        <TextMaterial text={text}>
            {(font) => {
                const textGeometry = new TextGeometry(text, { font, size: fontSize, height: 0.2 });
                return (
                    <mesh geometry={textGeometry} />
                );
            }}
        </TextMaterial>
    );
}



export default TextTexture;
