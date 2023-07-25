// Projects.tsx
import React from 'react';
import styles from '../styles/Projects.module.scss';
import MenuItem from './MenuItem';
import videoGenImage from '../images/Video_Gen.png';
import JobSearchImage from '../images/Job_Search.png';

interface Project {
    name: string;
    description: string;
    image: string;
    link: string;
}

interface ProjectsProps {
    onProjectClick?: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {

  const projects: Project[] = [
    {
      name: 'AI Video Generator',
      description: 'Description of the project...',
      image: videoGenImage, 
      link: 'https://github.com/blue-codes-yep/AI.AT',
    },
    {
      name: 'Job Finder',
      description: 'Description of the project...',
      image: JobSearchImage,
      link: 'https://github.com/jamariod/JobFinder',
    },
    
  ];

  return (
    <div className={styles.projectsList}>
        {projects.map((project, index) => (
            <div key={index} className={styles.projectCard} onClick={() => onProjectClick && onProjectClick(project)}>
                <img src={project.image} alt={project.name} className={styles.projectImage} />
                <h2>{project.name}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                <a href={project.link}>View on GitHub</a>
            </div>
        ))}
    </div>
);
}

export default Projects;
