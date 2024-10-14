import React from 'react';
import './Projects.css';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { SiGit, SiVuedotjs, SiMysql, SiDocker, SiQuasar } from 'react-icons/si';

const PersonalProjects = () => {
    const projectList = [
        {
            id: 1,
            title: 'Blindio',
            description: `Blindio est un site web que j'ai développé en collaboration avec mon frère. 
            Le site utilise un lecteur YouTube intégré pour diffuser des extraits de chansons, 
            tandis que nous gérons liens, timecodes, réponses, catégories, tags et niveaux de difficulté 
            dans notre base de données SQL. En créant nous-mêmes ces données, nous avons la possibilité d'ajouter 
            plusieurs morceaux et timecodes pour chaque réponse, et ainsi générer des combinaisons aléatoires. 
            Cette approche permet d'offrir une expérience unique à chaque partie, évitant ainsi toute monotonie. 
            Pour assurer une interface utilisateur moderne et réactive, nous avons choisi Vue.js comme framework 
            JavaScript pour le développement du site. Cependant, Blindio est encore en phase de développement.`,
            imageUrl: 'https://via.placeholder.com/300',
            githubLink: 'https://github.com/username/project1',
            liveLink: 'http://cultio.lespi.ovh',
            tools: ['Git', 'Vue.js', 'MySql', 'Docker', 'Quasar']
        },

    ];

    const toolIcons = {
        Git: <SiGit size={24} />,
        'Vue.js': <SiVuedotjs size={24} />,
        MySql: <SiMysql size={24} />,
        Docker: <SiDocker size={24} />,
        Quasar: <SiQuasar size={24} />
    };

    return (
        <section className="projects">
            <div className="projects-content">
                <h2>Projets Personnels</h2>
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

export default PersonalProjects;
