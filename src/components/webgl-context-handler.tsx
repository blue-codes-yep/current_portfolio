import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

function WebGLContextHandler() {
    const { gl } = useThree();

    useEffect(() => {
        const handleContextLost = (event: Event) => {
            event.preventDefault();
            // Replace this with actual function to handle the WebGL context lost event
            // showTextures();
        };

        gl.domElement.addEventListener('webglcontextlost', handleContextLost, false);

        return () => {
            gl.domElement.removeEventListener('webglcontextlost', handleContextLost, false);
        };
    }, [gl]);

    return null;
}

export default WebGLContextHandler;