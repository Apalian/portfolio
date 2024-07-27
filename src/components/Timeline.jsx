import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (


    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--other"
            date="12 Avril 2005"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            /*icon={<WorkIcon />}*/
        >
            <h3 className="vertical-timeline-element-title">Lespilette Colin</h3>
            <h4 className="vertical-timeline-element-subtitle">Agen, 47</h4>
            <p>
                16h05: Lespilette Colin est né avec 5 heures de retard.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="04 Juillet 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            /*icon={<WorkIcon />}*/
        >
            <h3 className="vertical-timeline-element-title">Parcours scolaire</h3>
            <h4 className="vertical-timeline-element-subtitle">Agen, 47</h4>
            <p>
                Obtention du Baccalauréat mention Bien, spé. Maths/NSI
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="01 septembre 2023 - Présent"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            /*icon={<WorkIcon />}*/
        >
            <h3 className="vertical-timeline-element-title">Études supérieures</h3>
            <h4 className="vertical-timeline-element-subtitle">Toulouse, 31</h4>
            <p>
                Admission à l'IUT informatique de Rangueil
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Présent"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            /*icon={<WorkIcon />}*/
        >
            <h3 className="vertical-timeline-element-title">Travail Personnel</h3>
            <h4 className="vertical-timeline-element-subtitle">Toulouse, 31</h4>
            <p>
                Développement du site web "Blindio" en collaboration avec mon frère
            </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
    );
};

export default Timeline;
