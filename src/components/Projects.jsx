import PersonalProjects from "./PersonalProjects";
import StudentProjects from "./StudentProjects";
import './Projects.css';
import React from "react";

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h1>Projets</h1>
            <PersonalProjects/>
            <StudentProjects/>
        </section>

    )
};

export default Projects;