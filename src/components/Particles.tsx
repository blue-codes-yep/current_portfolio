import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
    count?: number;
}

const Particles: React.FC<ParticlesProps> = ({ count = 10000 }) => {
    const particlesRef = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            pos[i] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, [count]);

    useFrame(() => {
        if (particlesRef.current) {
            particlesRef.current.rotation.x += 0.001;
            particlesRef.current.rotation.y += 0.001;
        }
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    return (
        <points ref={particlesRef} geometry={geometry}>
            <pointsMaterial attach="material" size={0.01} color="white" />
        </points>
    );
};

export default Particles;
