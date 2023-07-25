// MenuItem.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Menu.module.scss';

interface MenuItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    onHideDescription?: () => void; 
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick, onHideDescription }) => {  // Add onHideDescription
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        if (onHideDescription) {
            onHideDescription(); 
        }
    }

    return (
        <motion.div
            className={styles.menuItem}
            onClick={handleClick}  
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
        >
            {children}
        </motion.div>
    );
}

export default MenuItem;