import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Menu.module.scss';

interface MenuProps {
    onProjectClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onProjectClick }) => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    return (
        <div className={styles.menu}>
            <motion.div
                className={styles.menuItem}
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
            >
                Projects
            </motion.div>

            <motion.div
                className={styles.projectsList}
                initial={{ scale: 0 }}
                animate={{ scale: isProjectsOpen ? 1 : 0 }}
                exit={{ scale: 0 }}
                transition={{ type: 'tween', duration: 0 }}
            >

                <motion.div
                    className={styles.projectItem}
                    onClick={onProjectClick}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                >
                    Project 1
                </motion.div>
                <motion.div
                    className={styles.projectItem}
                    onClick={onProjectClick}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                >
                    Project 2
                </motion.div>
                <motion.div
                    className={styles.projectItem}
                    onClick={onProjectClick}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                >
                    Project 3
                </motion.div>
                <motion.div
                    className={styles.projectItem}
                    onClick={onProjectClick}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                >
                    Project 4
                </motion.div>
            </motion.div>
        </div>
    );
}
export default Menu;
