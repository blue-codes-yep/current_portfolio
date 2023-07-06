import styles from '../styles/Loader.module.scss';
import React, { useState, useEffect } from 'react';

function Loader() {
    const [isClicked, setIsClicked] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            setIsClicked(true);
            setPosition({ x: event.clientX, y: event.clientY });
            setTimeout(() => setIsClicked(false), 3000); // Reset after 3 seconds
        };

        window.addEventListener('click', handleClick);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className={styles['animation-container']}>
            <div className={styles['lightning-container']}>
                <div className={`${styles.lightning} ${styles.white}`}></div>
                <div className={`${styles.lightning} ${styles.red}`}></div>
            </div>
            {isClicked && (
                <div style={{ position: 'absolute', top: position.y, left: position.x }}>
                    <div className={`${styles['boom-container']} ${styles.first}`}>
                        <div className={`${styles.shape} ${styles['triangle']}`}></div>
                        <div className={`${styles.shape} ${styles['triangle']} ${styles.big}`}></div>
                        <div className={`${styles.shape} ${styles['circle']}`}></div>
                        <div className={`${styles.shape} ${styles['circle']} ${styles.big}`}></div>
                        <div className={`${styles.shape} ${styles['disc']}`}></div>
                    </div>
                    <div className={`${styles['boom-container']} ${styles.second}`}>
                        <div className={`${styles.shape} ${styles['triangle']}`}></div>
                        <div className={`${styles.shape} ${styles['triangle']} ${styles.big}`}></div>
                        <div className={`${styles.shape} ${styles['circle']}`}></div>
                        <div className={`${styles.shape} ${styles['circle']} ${styles.big}`}></div>
                        <div className={`${styles.shape} ${styles['disc']}`}></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Loader;
