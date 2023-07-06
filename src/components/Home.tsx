import React from 'react';
import styles from '../styles/Home.module.scss';
import Loader from './Loader';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div className={styles.home}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
        >
            <Loader />
            <motion.div className={styles.intro}>
                <motion.div className={styles.profile}
                    initial={{ x: 0 }}
                    animate={{ x: "-330%" }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1 className={styles.name}>Blue</motion.h1>
                    <motion.h2 className={styles.title}>Software Engineer</motion.h2>
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
                    <motion.div className={styles.skills}
                                        initial={{ x: 0 }}
                                        animate={{y: "45%", x: "48%" }}
                                        transition={{ duration: 5 }}>
                        <motion.h3>Software Development Skills:</motion.h3>
                        <motion.p>JavaScript, Python, Flask, Pandas, Numpy, Langchain, LLMs, Node.js, React, Express, RESTful API, PostgreSQL, NLPs, Selenium, Beautiful Soup, Playwright, Material UI, Bootstrap, Flexbox, Heroku, AWS, NGNIX, HTML, CSS</motion.p>
                    </motion.div>
                </motion.div>
                <motion.div className={styles.footer}
                    initial={{ y: 0, x: 0 }}
                    animate={{ y: "-245%", x: "-41%" }}
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
        </motion.div>
    );
}

export default Home;
