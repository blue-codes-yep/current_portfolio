import React from 'react';
import styles from '../styles/Home.module.scss';
import Menu from './Menu';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import { SpotLight } from '@react-three/drei';
function Home() {
    const [showProjects, setShowProjects] = React.useState(false);

    const handleProjectClick = () => {
        setShowProjects(true);
        console.log('Project clicked');
    };

    return (
        <div className={styles.home}>
            <Menu onProjectClick={handleProjectClick} />
            <div className={styles.content}>

                <div className={styles.left}>
                    <h1 className={styles.name}>Blue</h1>
                    <h2 className={styles.title}>Software Engineer</h2>
                </div>
                <div className={styles.right}>
                    <p className={styles.description}>
                        I'm a software engineer with the ability to pick up new languages and technologies as needed, and with a focus on fast, responsive, and intuitive code. Forever learning, and moving forward with my passion for technology, as well as the advancement of my skills in all aspects.
                    </p>
                </div>
            </div>
            <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <SpotLight
                    color={'blue'}
                    position={[-6, 3, 1]}
                    distance={4}
                    angle={0.2}
                    attenuation={2}
                    anglePower={6} // Diffuse-cone anglePower (default: 5)
                    castShadow
                    shadowCameraFov={undefined} shadowCameraLeft={undefined} shadowCameraRight={undefined} shadowCameraTop={undefined} shadowCameraBottom={undefined} shadowCameraNear={undefined} shadowCameraFar={undefined} shadowBias={undefined} shadowMapWidth={undefined} shadowMapHeight={undefined}/>
                <Particles count={5000} />
            </Canvas>
        </div>
    );
}

export default Home;
