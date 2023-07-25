import React, { useState } from 'react';
import styles from '../styles/Menu.module.scss';
import MenuItem from './MenuItem';
import Projects from './Projects';

interface MenuProps {
    onProjectClick: (project: {name: string, description: string, image: string, link: string}) => void;
    onHideDescription: () => void;
}

const Menu: React.FC<MenuProps> = ({ onProjectClick, onHideDescription }) => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    const handleItemClick = () => {
        if (onHideDescription) {
            onHideDescription();
        }
        setIsProjectsOpen(!isProjectsOpen);
    }

    return (
        <div className={styles.menu}>
            <MenuItem onClick={handleItemClick} onHideDescription={onHideDescription}>Projects</MenuItem>
            {isProjectsOpen && <Projects onProjectClick={onProjectClick} />}
            <MenuItem onClick={onHideDescription}>About Me</MenuItem>
            <MenuItem onClick={onHideDescription}>Skills</MenuItem>
            <MenuItem onClick={onHideDescription}>Contact</MenuItem>
        </div>
    );
}

export default Menu;