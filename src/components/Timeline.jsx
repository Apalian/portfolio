import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBaby, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';

const Timeline = () => {
    // Fonction pour faire défiler vers la section des projets
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="timeline">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024 - Présent"
                    iconStyle={{ background: 'rgb(170,50,50)', color: '#fff' }}
                    icon={<FaProjectDiagram />}
                    onTimelineElementClick={scrollToProjects}
                >
                    <h3 className="vertical-timeline-element-title">Travail Personnel</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toulouse, 31</h4>
                    <p>
                        Développement du site web "Blindio" en collaboration avec mon frère
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="01 septembre 2024 - Présent"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Études supérieures</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toulouse, 31</h4>
                    <p>
                        2ème année en BUT informatique à l'IUT de Paul-Sabatier parcours
                        <b> Administration Gestion et Explotations de Données</b>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="04 Juillet 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Parcours scolaire</h3>
                    <h4 className="vertical-timeline-element-subtitle">Agen, 47</h4>
                    <p>
                        Obtention du Baccalauréat mention Bien, spécialités Maths/NSI
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--other"
                    date="12 Avril 2005"
                    iconStyle={{ background: 'rgb(0,150,80)', color: '#fff' }}
                    icon={<FaBaby />}
                >
                    <h3 className="vertical-timeline-element-title">Naissance</h3>
                    <h4 className="vertical-timeline-element-subtitle">Agen, 47</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
};

export default Timeline;
