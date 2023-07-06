import React from 'react';
import styles from '../styles/Home.module.scss';
import Loader from './Loader';

function Home() {
    return (
        <div className={styles.home}>
            <Loader />
            <div className={styles.intro}>
                <div className={styles.profile}>
                    <h1 className={styles.name}>Blue</h1>
                    <h2 className={styles.title}>Software Engineer</h2>
                </div>
                <div className={styles.d_skill}>
                    <p className={styles.description}>
                        I'm a software engineer with the ability to pick up new languages and technologies as needed, and with a focus on fast, responsive, and intuitive code. Forever learning, and moving forward with my passion for technology, as well as the advancement of my skills in all aspects.
                    </p>
                    <div className={styles.skills}>
                        <h3>Software Development Skills:</h3>
                        <p>JavaScript, Python, Flask, Pandas, Numpy, Langchain, LLMs, Node.js, React, Express, RESTful API, PostgreSQL, NLPs, Selenium, Beautiful Soup, Playwright, Material UI, Bootstrap, Flexbox, Heroku, AWS, NGNIX, HTML, CSS</p>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.contact}>
                        <h3>Contact:</h3>
                        <p>blue.codes.eng@gmail.om</p>
                    </div>
                    <div className={styles.links}>
                        <h3>Links:</h3>
                        <p><a href="https://bluecodes.dev">bluecodes.dev</a> | <a href="https://github.com/blue-codes-yep">GitHub</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
