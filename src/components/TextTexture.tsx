import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { TextShaderMaterial } from './TextShaderMaterial'; // adjust the path as needed

interface TextTextureProps {
    text: string;
    // Add any other props you need for the Text component here
    color?: string;
    fontSize?: number;
    // etc.
}

function TextTexture({ text, ...props }: TextTextureProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.material = TextShaderMaterial;
        }
    }, []);

    useFrame(({ clock }) => {
        if (TextShaderMaterial.uniforms.time) {
            TextShaderMaterial.uniforms.time.value = clock.getElapsedTime();
        }
    });

    return (
        <Text ref={meshRef} {...props}>
            {text}
        </Text>
    );
}

export default TextTexture;