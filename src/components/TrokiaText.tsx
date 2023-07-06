import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { Text } from 'troika-three-text';

interface TroikaTextProps {
    text: string;
    position: number;
}

const TroikaText: React.FC<TroikaTextProps> = ({ text, position }) => {
    const textRef = useRef(new Text());
    const { scene } = useThree();

    useEffect(() => {
        textRef.current.text = text;
        textRef.current.font = 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff';
        textRef.current.fontSize = 0.1;
        textRef.current.color = 'black';
        textRef.current.anchorX = '50%';
        textRef.current.anchorY = '50%';
        textRef.current.position.z = position;
        textRef.current.sync();

        scene.add(textRef.current);

        return () => {
            scene.remove(textRef.current);
        };
    }, [text, position, scene]);

    return null;
};

export default TroikaText;
