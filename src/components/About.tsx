import React from 'react';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';

const About: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight />
                <gridHelper args={[100, 100]} />
                <Particles  />
            </Canvas>
        </div>
    );
};

export default About;
