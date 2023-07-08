import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { WebGLRenderTarget, LinearFilter, RGBAFormat } from 'three';
import { FontLoader, Font } from '../utils/FontLoader';
import { TextGeometry } from '../utils/TextGeometry';
import TextShader from './TextShader';

interface TextMaterialProps {
    text: string;
    color?: string;
    children?: (font: Font) => React.ReactNode;
}

function TextMaterial({ text, color = '#FFFFFF', children }: TextMaterialProps) { // Set a default color
    const { gl, size } = useThree();
    const fontLoader = new FontLoader();
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const target = new WebGLRenderTarget(size.width, size.height, { minFilter: LinearFilter, magFilter: LinearFilter, format: RGBAFormat });

    useEffect(() => {
        fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
            camera.position.z = 1;
            const geometry = new TextGeometry(text, { font, size: 0.5, height: 0.2 });
            const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(color) }); // Use the color prop
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            gl.setRenderTarget(target);
            gl.render(scene, camera);
            gl.setRenderTarget(null);
            if (materialRef.current) {
                materialRef.current.uniforms.textTexture.value = target.texture;
            }
            if (typeof children === 'function') {
                children(font);
            }
        });
    }, [text, gl, size.width, size.height, children, color]); // Add color to the dependencies array

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.time.value = clock.getElapsedTime();
            materialRef.current.uniforms.pixelSize.value = 10.5 + 9.5 * Math.sin(clock.getElapsedTime() * Math.PI / 5);
        }
    });

    return (
        <shaderMaterial
            attach="material"
            args={[TextShader]}
            ref={materialRef}
        />
    );
}

export default TextMaterial;