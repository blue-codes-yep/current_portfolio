import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { RenderTextTexture } from './RenderTextTexture';
import { TextShaderMaterial } from './TextShaderMaterial';

interface ParticleSystemProps {
    text: string;
}

function ParticleSystem({ text }: ParticleSystemProps) {
    // Create a texture from the text
    const textTexture = useMemo(() => {
        const pixels = RenderTextTexture(text);
        const width = text.length * 16; // Adjust as needed
        const height = 16; // Adjust as needed
        const dataTexture = new THREE.DataTexture(pixels, width, height);
        return dataTexture;
    }, [text]);

    const geometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const width = textTexture.image.width;
        const height = textTexture.image.height;
    
        // Create arrays to hold the positions and uvs
        const positions = new Float32Array(width * height * 3); // 3 coordinates per point
        const uvs = new Float32Array(width * height * 2); // 2 coordinates per point
    
        // Loop over each pixel in the texture
        for (let i = 0, j = 0; i < positions.length; i += 3, j += 2) {
            // Calculate the x and y coordinates
            const x = (i / 3) % width;
            const y = Math.floor((i / 3) / width);
    
            // Set the position for this point
            positions[i] = x;
            positions[i + 1] = y;
            positions[i + 2] = 0; // z coordinate is 0
    
            // Set the uv for this point
            uvs[j] = x / width;
            uvs[j + 1] = y / height;
        }
    
        // Add the positions and uvs to the geometry
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    
        return geometry;
    }, [textTexture]);

    // Create a ref to access the particles mesh
    const particlesRef = useRef<THREE.Points>(null);

    // Animate the particles in the render loop
    useFrame(({ clock }) => {
        if (particlesRef.current) {
            const time = clock.getElapsedTime();
            const positionArray = particlesRef.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < positionArray.length; i += 3) {
                // Only update the z coordinate
                positionArray[i + 2] = Math.sin(time + i / 3) * 5;
            }
            particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });
    



    return (
        <points ref={particlesRef} geometry={geometry} material={new THREE.PointsMaterial({ size: 0 })} />
    );
}

export default ParticleSystem;
