import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project">
        <h2>AI Video Generator</h2>
        <p>Description of the project...</p>
        <a href="https://github.com/blue-codes-yep/AI.AT">View on GitHub</a>
      </div>
      <div className="project">
        <h2>Job Finder</h2>
        <p>Description of the project...</p>
        <a href="https://github.com/jamariod/JobFinder">View on GitHub</a>
      </div>
      {/* Add more projects here... */}
    </div>
  );
}

export default Projects;
