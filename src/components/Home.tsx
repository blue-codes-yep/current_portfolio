import React, { startTransition, useRef, useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';
import Menu from './Menu';
import TextTexture from './TextTexture';
import Particles from './Particles';

function Home() {
    const footerRef = useRef(null);
    const skillRef = useRef(null);

    const handleProjectClick = () => {
        console.log('Project clicked');
    };

    return (
        <motion.div className={styles.home}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
        >
            <Menu onProjectClick={handleProjectClick} />
            <motion.div className={styles.intro}>
                <motion.div className={styles.profile}
                    initial={{ x: 0 }}
                    animate={{ x: "-330%" }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1 className={styles.name}
                        initial={{ y: 0, x: 0 }}
                        animate={{ y: "35%", x: "-94%" }}
                        transition={{ duration: 5 }}>Blue</motion.h1>
                    <motion.h2 className={styles.title}
                        initial={{ y: 0, x: 0 }}
                        animate={{ y: "-55%", x: "5%" }}
                        transition={{ duration: 5 }}>Software Engineer</motion.h2>
                </motion.div>
                <motion.div className={styles.d_skill}
                    initial={{ x: 0 }}
                    animate={{ x: "160%" }}
                    transition={{ duration: 5 }}
                >
                    <motion.p className={styles.description}
                        initial={{ x: 0 }}
                        animate={{ x: "50%" }}
                        transition={{ duration: 5 }}
                    >
                        I'm a software engineer with the ability to pick up new languages and technologies as needed, and with a focus on fast, responsive, and intuitive code. Forever learning, and moving forward with my passion for technology, as well as the advancement of my skills in all aspects.
                    </motion.p>
                    <motion.div ref={skillRef} className={styles.skills}
                        initial={{ x: 0 }}
                        animate={{ y: "45%", x: "50%" }}
                        transition={{ duration: 5 }}>
                        <motion.h3>Software Development Skills:</motion.h3>
                        <motion.p>JavaScript, Python, Flask, Pandas, Numpy, Langchain, LLMs, Node.js, React, Express, RESTful API, PostgreSQL, NLPs, Selenium, Beautiful Soup, Playwright, Material UI, Bootstrap, Flexbox, Heroku, AWS, NGNIX, HTML, CSS</motion.p>
                    </motion.div>
                </motion.div>
                <motion.div ref={footerRef} className={styles.footer}
                    initial={{ y: 0, x: 0 }}
                    animate={{ y: "-350%", x: "-44%" }}
                    transition={{ duration: 5 }}
                >
                    <motion.div className={styles.contact}>
                        <motion.p>blue.codes.eng@gmail.com</motion.p>
                    </motion.div>
                    <motion.div className={styles.links}>
                        <motion.p><a href="https://bluecodes.dev">bluecodes.dev</a> | <a href="https://github.com/blue-codes-yep">GitHub</a></motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
            <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <ambientLight />
                <Particles count={5000} />
                <Suspense fallback={null}>
                    {/* Will maybe revist animating text manually later <TextTexture text="blue.codes.eng@gmail.com" fontSize={2} color="#5024FF" /> */}
                </Suspense>
            </Canvas>
        </motion.div>
    );
}

export default Home;

