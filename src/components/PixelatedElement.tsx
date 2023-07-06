import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ShaderMaterial } from 'three';

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float pixelSize;
  uniform sampler2D map;
  varying vec2 vUv;

  void main() {
    vec2 uv = floor(vUv / pixelSize) * pixelSize;
    gl_FragColor = texture2D(map, uv);
  }
`;

interface PixelatedElementProps {
  texture: string;
  pixelSize: number;
}

function PixelatedElement({ texture, pixelSize }: PixelatedElementProps) {
  const materialRef = useRef<ShaderMaterial>(null);

  // Update pixelSize uniform on every frame
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.pixelSize.value = pixelSize;
    }
  });

  const uniforms = useMemo(() => ({
    pixelSize: { value: pixelSize },
    map: { value: new THREE.TextureLoader().load(texture) },
  }), [pixelSize, texture]);

  return (
    <mesh>
      <planeBufferGeometry args={[1, 1]} />
      <shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
}

export default PixelatedElement;
