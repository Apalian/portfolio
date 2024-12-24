// src/components/Hobbies/Hobbies.js
import React from 'react';
import styles from './Hobbies.module.css';
import Badge from "../Badge/Badge";

import { AiOutlineTeam } from "react-icons/ai";
import { GiHiveMind } from "react-icons/gi";
import {MdForkRight, MdOutlineNewReleases} from "react-icons/md";
import {IoMdTime} from "react-icons/io";
import {IoCreateSharp} from "react-icons/io5";

const hobbiesData = [
    {
        image: "/Escalade.svg",
        title: "Escalade en salle",
        description: `L’escalade en salle est une activité que j’ai découverte il y a environ un an et qui m’a tout de
            suite séduite grâce à son aspect à la fois ludique et sportif. J’y vais une à deux fois par
            semaine, généralement accompagné de mon frère et de quelques amis. Ce moment de partage est pour
            moi un moyen privilégié de me dépenser physiquement et de tisser des liens forts autour d’un
            intérêt commun. À chaque séance, je ressens un sentiment d’accomplissement lorsque je parviens à
            monter une nouvelle voie ou à améliorer ma technique de prise. C’est un défi permanent qui
            nécessite de la concentration, de la souplesse et de l’endurance. Sur le plan mental, l’escalade
            me permet de mieux gérer mon stress en hauteur et de renforcer ma persévérance face aux
            difficultés.`,
        softSkills: [
            {
                image: "/?.svg",
                title: "Gestion du temps"
            },
            {
                image: "/?.svg",
                title: "Prise de décision"
            },
            {
                image: "/TeamSpirit.svg",
                title: "Esprit d'équipe"
            },
            {
                image: "/TeamWork.svg",
                title: "Travail d'équipe"
            },
        ]
    },
    {
        image: "/Musculation.svg",
        title: "Musculation",
        description: `Je pratique la musculation de manière régulière, à raison de cinq séances par semaine, 
            chaque matin avant de commencer mes activités quotidiennes. C’est une habitude qui m’a permis de développer 
            non seulement ma force physique mais aussi une véritable discipline de vie. En me levant tôt pour m’entraîner, 
            je me mets dans de bonnes conditions pour le reste de la journée : mon énergie et ma motivation sont décuplées. 
            Cet engagement exige de la constance et une certaine rigueur, car la progression en musculation repose sur la 
            répétition et l’augmentation progressive de la difficulté. De plus, je trouve que ce sport nourrit une forme de 
            satisfaction personnelle lorsque je constate mes progrès et atteins de nouveaux paliers. Sur le plan mental, il 
            m’aide à travailler ma force de caractère, en m’obligeant à dépasser mes limites et à surmonter l’éventuelle 
            lassitude de la routine.`,
        softSkills: [
            {
                image: "/?.svg",
                title: "Discipline"
            },
            {
                image: "/?.svg",
                title: "Détermination "
            },
        ]
    },
    {
        image: "/Programmation.svg",
        title: "Programmation",
        description: `Le coding est une passion qui m’anime au quotidien, que ce soit pour développer des applications 
        en Java ou Kotlin, créer des scripts Python, ou encore concevoir des sites et applications web avec des 
        frameworks comme React ou Vue.js. J’aime l’idée de partir d’une page blanche et de façonner un projet à travers 
        des lignes de code, en donnant vie à des fonctionnalités parfois complexes. Ce processus fait appel à ma 
        créativité pour trouver des solutions innovantes, mais aussi à une rigueur technique pour maintenir la qualité 
        et la lisibilité du code. Je prends plaisir à rester à jour sur les nouvelles bibliothèques et tendances afin 
        de perfectionner mes compétences. Au-delà de l’aspect purement technique, la programmation nécessite une grande 
        capacité d’analyse pour résoudre des problèmes et optimiser des algorithmes. Cette démarche intellectuelle me 
        stimule et m’encourage à approfondir mes connaissances en continu.`,
        softSkills: [
            {
                image: <MdOutlineNewReleases />,
                title: "Résolution de problèmes"
            },
            {
                image: <IoCreateSharp />,
                title: "Créativité"
            },
        ]
    },

    {
        image: "/JeuxVideos.svg",
        title: "Jeux vidéo et animes",
        description: `Les jeux vidéo et les animes constituent une part importante de mes loisirs, 
        m’offrant un moment de détente et d’évasion après une journée de travail ou d’études. Sur le plan ludique, 
        les jeux vidéo stimulent ma réactivité, mon esprit d’équipe et ma capacité à prendre des décisions rapides. 
        Les jeux orientés collaboration m’amènent à travailler en synergie avec d’autres joueurs, ce qui renforce mon 
        sens du collectif et de la stratégie. Je veille toutefois à accorder la priorité à mes obligations 
        professionnelles et personnelles, afin de maintenir un équilibre sain entre loisirs et responsabilités. 
        Le visionnage d’animes, quant à lui, m’ouvre de nouvelles perspectives culturelles et me permet d’explorer 
        différents univers narratifs. Les thématiques variées et la créativité débordante de ces œuvres nourrissent mon 
        imagination, tout en me sensibilisant aux émotions et aux motivations de chaque personnage. Partager mes 
        impressions avec d’autres passionnés enrichit également ma capacité d’écoute et mon esprit d’analyse, puisqu’il 
        s’agit souvent d’échanger sur des points de vue divergents et d’approfondir les messages véhiculés par les 
        séries.`,
        softSkills: [
            {
            image: <IoMdTime />,
            title: "Gestion du temps"
            },
            {
            image: <MdForkRight />,
            title: "Prise de décision"
            },
            {
            image: <GiHiveMind />,
            title: "Esprit d'équipe"
            },
            {
            image: <AiOutlineTeam />,
            title: "Travail d'équipe"
            },
        ]
    },
];

const Hobbies = () => {
    return (
        <div className={styles.hobbiesContainer}>
            <h1 className={styles.title}>Mes Hobbies</h1>
            <div className={styles.hobbiesList}>
                {hobbiesData.map((hobby, index) => (
                    <div
                        key={index}
                        className={`${styles.hobby} ${index % 2 !== 0 ? styles.hobbyReverse : ''}`}
                    >
                        <div className={styles.iconContainer}>
                            <img src={hobby.image} alt={hobby.title} className={styles.icon}/>
                            <div className={styles.softSkills}>
                                {hobby.softSkills.map((skill, idx) => (
                                    <Badge key={idx} image={skill.image} title={skill.title}/>
                                ))}
                            </div>
                        </div>

                        <div className={styles.hobbyText}>
                            <h2>{hobby.title}</h2>
                            <p>{hobby.description}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hobbies;
