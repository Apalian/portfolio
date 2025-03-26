import React from 'react';
import './Projects.css';
import { FaGithub, FaGlobe, FaJava } from 'react-icons/fa';
import { TbSql } from "react-icons/tb";

const StudentProjects = () => {
    const projectList = [
        {
            id: 1,
            title: 'Création et exploitation d’une base de données',
            description: `Dans le cadre de mes études universitaires, 
            nous avons développé une application de gestion immobilière. 
            Pour la partie applicative, nous avons utilisé le langage Java, 
            tandis que la base de données a été conçue et gérée à l'aide des langages SQL et PL/SQL. 
            L'application permet de gérer divers aspects de la gestion immobilière, 
            en s'appuyant sur une base de données performante pour le stockage 
            et la manipulation des informations relatives aux biens immobiliers.`,
            imageUrl: 'https://via.placeholder.com/300',
            githubLink: 'https://github.com/username/project1',
            liveLink: 'http://cultio.lespi.ovh',
            tools: ['Java', 'SQL', 'PLSQL']
        },
    ];

    const toolIcons = {
        Java: <FaJava size={24} />,
        SQL: <TbSql size={24} />,
        PLSQL: <TbSql size={24} />
    };

    return (
        <section className="projects">
            <div className="projects-content">
                <h2>Projets Étudiants</h2>
                <ul className="projects-list">
                    {projectList.map(project => (
                        <li key={project.id} className="project-item">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <div className="project-rectangle"></div>
                            </div>
                            <div className="project-description">
                                {project.description}
                            </div>
                            <div className="project-image">
                                <img src={project.imageUrl} alt={project.title} />
                            </div>
                            <div className="project-footer">
                                <div className="project-links">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <FaGlobe size={24} />
                                    </a>
                                </div>
                                <div className="project-tools">
                                    {project.tools.map((tool, index) => (
                                        <div key={index} className="project-tool">
                                            <div className="tool-icon" style={{ animationDelay: `${index * 0.1}s` }}>
                                                {toolIcons[tool]}
                                            </div>
                                            <div className="tool-name">{tool}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default StudentProjects;
