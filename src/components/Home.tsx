import React from 'react';
import styles from '../styles/Home.module.scss';
import Loader from './Loader';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div className={styles.home}>
            <Loader />
            <motion.div className={styles.intro}>
                <motion.div className={styles.profile}>
                    <motion.h1 className={styles.name}>Blue</motion.h1>
                    <motion.h2 className={styles.title}>Software Engineer</motion.h2>
                </motion.div>
                <motion.div className={styles.d_skill}>
                    <motion.p className={styles.description}>
                        I'm a software engineer with the ability to pick up new languages and technologies as needed, and with a focus on fast, responsive, and intuitive code. Forever learning, and moving forward with my passion for technology, as well as the advancement of my skills in all aspects.
                    </motion.p>
                    <motion.div className={styles.skills}>
                        <motion.h3>Software Development Skills:</motion.h3>
                        <motion.p>JavaScript, Python, Flask, Pandas, Numpy, Langchain, LLMs, Node.js, React, Express, RESTful API, PostgreSQL, NLPs, Selenium, Beautiful Soup, Playwright, Material UI, Bootstrap, Flexbox, Heroku, AWS, NGNIX, HTML, CSS</motion.p>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className={styles.footer}
                    initial={{ y: 100 }} // start 100px below
                    animate={{ y: 0 }} // animate to its original position
                    transition={{ duration: 1 }} // animate over 1 second
                >
                    <motion.div className={styles.contact}>
                        <motion.p>blue.codes.eng@gmail.com</motion.p>
                    </motion.div>
                    <motion.div className={styles.links}>
                        <motion.p><a href="https://bluecodes.dev">bluecodes.dev</a> | <a href="https://github.com/blue-codes-yep">GitHub</a></motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Home;

