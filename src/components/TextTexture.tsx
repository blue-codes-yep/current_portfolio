import React from 'react';
import { Text } from '@react-three/drei';

interface TextTextureProps {
    text: string;
}

function TextTexture({ text }: TextTextureProps) {
    return (
        <Text
            color="white" 
            fontSize={1} 
            position={[0, 0, 0]} 
        >
            {text}
        </Text>
    );
}

export default TextTexture;
