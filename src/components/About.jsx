import React from 'react';
import './About.css'; // Importer le CSS combiné

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2>À propos de moi</h2>
                <p>Actuellement en première année du Brevet Universitaire de Technologie (BUT) en informatique à l'IUT Paul Sabatier, je suis intéressé par le monde de la technologie et de l'informatique. Ma formation actuelle me permet d'acquérir des compétences solides dans divers domaines de l'informatique, de la programmation aux systèmes d'information. Je suis motivé et engagé dans mes études, avec une forte volonté d'apprendre et de relever de nouveaux défis.

                    Je suis particulièrement passionné par l'intelligence artificielle et les nouvelles technologies. Mon objectif est de faire de l'IA mon métier après mes études et de contribuer à transformer ce domaine pour le futur.</p>
            </div>
        </section>
    );
}

export default About;
