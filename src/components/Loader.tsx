import React from 'react';
import styles from '../styles/Loader.module.scss';

function Loader() {
    return (
        <div className={styles.animationContainer}>
            <div className={styles.lightningContainer}>
                <div className={styles.lightning + ' ' + styles.white}></div>
                <div className={styles.lightning + ' ' + styles.red}></div>
            </div>
            <div className={styles.boomContainer}>
                <div className={styles.shape + ' ' + styles.circle + ' ' + styles.big + ' ' + styles.white}></div>
                <div className={styles.shape + ' ' + styles.circle + ' ' + styles.white}></div>
                <div className={styles.shape + ' ' + styles.triangle + ' ' + styles.big + ' ' + styles.yellow}></div>
                <div className={styles.shape + ' ' + styles.disc + ' ' + styles.white}></div>
                <div className={styles.shape + ' ' + styles.triangle + ' ' + styles.blue}></div>
            </div>
            <div className={styles.boomContainer + ' ' + styles.second}>
                <div className={styles.shape + ' ' + styles.circle + ' ' + styles.big + ' ' + styles.white}></div>
                <div className={styles.shape + ' ' + styles.circle + ' ' + styles.white}></div>
                <div className={styles.shape + ' ' + styles.disc + ' ' + styles.white}></div>
                <div className={styles.shape + ' ' + styles.triangle + ' ' + styles.blue}></div>
            </div>
        </div>
    );
}

export default Loader;
