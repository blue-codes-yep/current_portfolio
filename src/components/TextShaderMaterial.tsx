import * as THREE from 'three';

export const TextShaderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 1.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(vUv * sin(time), 0.0, 1.0);
    }
  `
});
