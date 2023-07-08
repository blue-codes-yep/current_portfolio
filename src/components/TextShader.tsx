import * as THREE from 'three';

const TextShader = {
  uniforms: {
    time: { value: 1.0 },
    resolution: { value: new THREE.Vector2() },
    pixelSize: { value: 1.0 }, // Add a new uniform for the pixel size
    textTexture: { value: null }, // Add a new uniform for the text texture
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
    uniform float pixelSize; // Add the pixel size uniform
    uniform sampler2D textTexture; // Add the text texture uniform
    varying vec2 vUv;

    void main() {
      vec2 uv = floor(vUv * pixelSize) / pixelSize; // Modify the uv coordinates to create the pixelation effect
      vec3 color = texture2D(textTexture, uv).rgb; // Sample the text texture at the modified uv coordinates
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export default TextShader;
