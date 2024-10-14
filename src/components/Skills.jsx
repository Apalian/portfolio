import React from 'react';
import { FaGitAlt } from 'react-icons/fa';
import {  FaJsSquare, FaPython, FaVuejs, FaJava, FaReact } from 'react-icons/fa';
import {ReactComponent as UKFlag} from '../assets/images/uk-flag.svg';
import {ReactComponent as CNFlag} from '../assets/images/cn-flag.svg';
import {ReactComponent as FRFlag} from '../assets/images/fr-flag.svg';
import './Skills.css';

const devSkills = [
    { icon: <FaJsSquare />, name: 'Javascript'},
    { icon: <FaPython />, name: 'Python'},
    { icon: <FaVuejs />, name: 'Vue.js'},
    { icon: <FaJava />, name: 'Java'},
    { icon: <FaReact />, name: 'React'},
    { icon: <FaGitAlt />, name: 'Git'},
];

const langSkills = [
    { icon: <FRFlag/>, name: 'Français'},
    { icon: <UKFlag/>, name: 'Anglais'},
    { icon: <CNFlag/>, name: 'Mandarin'},
];

const Skill = ({ icon, name, level }) => {
    return (
        <div className="skill">
            <div className="skill-icon">{icon}</div>
            <div className="skill-name">{name}</div>

        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
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
