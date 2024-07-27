import React from 'react';
import { FaGitAlt } from 'react-icons/fa';
import {  FaJsSquare, FaPython, FaVuejs, FaJava, FaReact } from 'react-icons/fa';
import {ReactComponent as UKFlag} from '../assets/images/uk-flag.svg';
import {ReactComponent as CNFlag} from '../assets/images/cn-flag.svg';
import {ReactComponent as FRFlag} from '../assets/images/fr-flag.svg';
import './Skills.css';

const devSkills = [
    { icon: <FaJsSquare />, name: 'Javascript', level: 2 },
    { icon: <FaPython />, name: 'Python', level: 3 },
    { icon: <FaVuejs />, name: 'Vue.js', level: 2 },
    { icon: <FaJava />, name: 'Java', level: 4 },
    { icon: <FaReact />, name: 'React', level: 1 },
    { icon: <FaGitAlt />, name: 'Git', level: 3 },
];

const langSkills = [
    { icon: <FRFlag/>, name: 'Français', level: 5 },
    { icon: <UKFlag/>, name: 'Anglais', level: 3 },
    { icon: <CNFlag/>, name: 'Mandarin', level: 1 },
];

const Skill = ({ icon, name, level }) => {
    const circles = Array(5).fill(0).map((_, i) => (
        <span key={i} className={`circle ${i < level ? 'filled' : ''}`}></span>
    ));
    return (
        <div className="skill">
            <div className="skill-icon">{icon}</div>
            <div className="skill-name">{name}</div>
            <div className="skill-level">{circles}</div>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="skills-section">
            <h2>Compétences</h2>
            <div className="skills-category">
                <h3>Développement</h3>
                <div className="skills">
                    {devSkills.map((skill, index) => (
                        <Skill key={index} {...skill} />
                    ))}
                </div>
            </div>
            <div className="skills-category">
                <h3>Langage</h3>
                <div className="skills">
                    {langSkills.map((skill, index) => (
                        <Skill key={index} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
