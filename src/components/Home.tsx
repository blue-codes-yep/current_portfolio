import React from 'react';
import styles from '../styles/Home.module.scss';


function Home() {
    return (
        <div className={styles.home}>
            <h1>Blue</h1>
            <h2>Software Engineer</h2>
            <p>
                I'm a software engineer with the ability to pick up new languages and technologies as needed, and with a focus on fast, responsive, and intuitive code. Forever learning, and moving forward with my passion for technology, as well as the advancement of my skills in all aspects.
            </p>
            <p>
                <strong>Software Development Skills:</strong> JavaScript, Python, Flask, Pandas, Numpy, Langchain, LLM’s, Node.js, React, Express, RESTful API, PostgreSQL, NLP’s, Selenium, Beautiful Soup, Playwright, Material UI, Bootstrap, Flexbox, Heroku, AWS, NGNIX, HTML, CSS
            </p>
            <p>
                <strong>Contact:</strong> blue.codes.eng@gmail.com
            </p>
            <p>
                <strong>Links:</strong> <a href="https://bluecodes.dev">bluecodes.dev</a> | <a href="https://github.com/blue-codes-yep">GitHub</a>
            </p>
        </div>
    );
}

export default Home;