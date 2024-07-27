import React from 'react';
import './About.css'; // Importer le CSS combiné

const About = () => {
    // Générer des formes aléatoires
    const shapes = Array.from({ length: 128 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 90}vh`, // Limiter à 90% pour éviter le débordement en bas
        left: `${Math.random() * 90}vw`, // Limiter à 90% pour éviter le débordement à droite
        size: `${Math.random() * 60 + 20}px`, // Taille des carrés entre 20px et 80px
        opacity: Math.random() * 0.3 + 0.1, // Opacité entre 0.1 et 0.4
        rotation: `${Math.random() * 360}deg` // Rotation entre 0 et 360 degrés
    }));

    return (
        <section id="about" className="about">
            <div className="shapes-container">
                {shapes.map(shape => (
                    <div
                        key={shape.id}
                        className="shape"
                        style={{
                            top: shape.top,
                            left: shape.left,
                            width: shape.size,
                            height: shape.size,
                            opacity: shape.opacity,
                            transform: `rotate(${shape.rotation})` // Appliquer la rotation
                        }}
                    ></div>
                ))}
            </div>
            <div className="about-content">
                <h2>À propos de moi</h2>
                <p>Actuellement en première année du Brevet Universitaire de Technologie (BUT) en informatique à l'IUT Paul Sabatier, je suis intéressé par le monde de la technologie et de l'informatique. Ma formation actuelle me permet d'acquérir des compétences solides dans divers domaines de l'informatique, de la programmation aux systèmes d'information. Je suis motivé et engagé dans mes études, avec une forte volonté d'apprendre et de relever de nouveaux défis.

                    Je suis particulièrement passionné par l'intelligence artificielle et les nouvelles technologies. Mon objectif est de faire de l'IA mon métier après mes études et de contribuer à transformer ce domaine pour le futur.</p>
            </div>
        </section>
    );
}

export default About;
