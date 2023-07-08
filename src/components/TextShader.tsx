import * as THREE from 'three';

const TextShader = {
  uniforms: {
    time: { value: 1.0 },
    resolution: { value: new THREE.Vector2() },
    pixelSize: { value: 1.0 },
    textTexture: { value: null },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform float pixelSize;
    uniform sampler2D textTexture;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    // Simple noise function
    float noise(vec2 uv) {
      return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    void main() {
      vec4 texColor = texture2D(textTexture, vUv);
      vec3 color = texColor.rgb;
  
      // Use the noise function to determine the visibility of each pixel
      float visibility = step(noise(vUv + time), 0.5);
  
      // Apply the visibility only to the text (where alpha = 1)
      gl_FragColor = vec4(color * visibility * texColor.a, texColor.a);
  }
  `,
};

export default TextShader;
