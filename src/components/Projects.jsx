import React from 'react';
import './Projects.css';

const Projects = () => {
    const projectList = [
        { id: 1, title: 'Projet 1', description: 'Description du projet 1', link: '#' },
        { id: 2, title: 'Projet 2', description: 'Description du projet 2', link: '#' },
        { id: 3, title: 'Projet 3', description: 'Description du projet 3', link: '#' }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-content">
                <h2>Mes Projets</h2>
                <ul className="projects-list">
                    {projectList.map(project => (
                        <li key={project.id} className="project-item">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} className="project-link">Voir plus</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Projects;
