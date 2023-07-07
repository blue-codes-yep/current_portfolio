import React, { startTransition, useRef, useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';
import Loader from './Loader';
import TextTexture from './TextTexture';
import ParticleSystem from './ParticleSystem';

function Home() {
    const [isPending, setIsPending] = useState(true);
    const footerRef = useRef(null);
    const skillRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('Intersection detected:', entry.isIntersecting); // Debug log
                if (entry.isIntersecting) {
                    handlePendingStateChange(false);
                } else {
                    handlePendingStateChange(true);
                }
            },
            { root: skillRef.current }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    function handlePendingStateChange(nextState: boolean) {
        console.log('Changing state to:', nextState); // Debug log
        startTransition(() => {
            setIsPending(nextState);
        });
    }

    return (
        <motion.div className={styles.home}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
        >
            <Suspense fallback={<div>Loading...</div>}>
                {isPending ? <Loader /> : null}
            </Suspense>
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
                    animate={{ y: "-350%", x: "-44.5%" }}
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
            <Canvas>
                <ambientLight />
                <Suspense fallback={null}>
                    <TextTexture text="blue.codes.eng@gmail.com"/>
                    <ParticleSystem text="blue.codes.eng@gmail.com"/>
                </Suspense>
            </Canvas>
        </motion.div>
    );
}

export default Home;

