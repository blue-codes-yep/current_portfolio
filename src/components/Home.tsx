import React from 'react';
import styles from '../styles/Home.module.scss';
import Menu from './Menu';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';

function Home() {
    const handleProjectClick = () => {
        console.log('Project clicked');
    };

    return (
        <div className={styles.home}>
            <div className={styles.left}>
                <h1 className={styles.name}>Blue</h1>
                <h2 className={styles.title}>Software Engineer</h2>
            </div>
            <Menu onProjectClick={handleProjectClick} />
            <div className={styles.right}>
                <p className={styles.description}>
                    I'm a software engineer with the ability to pick up new languages and technologies as needed, and with a focus on fast, responsive, and intuitive code. Forever learning, and moving forward with my passion for technology, as well as the advancement of my skills in all aspects.
                </p>
            </div>
            <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <Particles count={5000} />
            </Canvas>
        </div>
    );
}

export default Home;
