import React from 'react';
import cl from "./Projects.module.css";
import MySection from "../../../components/section/MySection";
import {projects} from "../../../projects/projects";
import ProjectCard from "../../../components/projectCard/projectCard";


const Projects = ({id}) => {
    return (
        <MySection id={id} className={cl.projects}>
            <h2>PORTFOLIO</h2>
            <h1>Each project is a unique piece of development</h1>

            {projects.map(project =>
                <ProjectCard key={project.name}
                             name={project.name}
                             src={project.src}
                             description={project.description}
                             git={project.git}
                             link={project.link}
                             tags={project.tags}/>
            )}
        </MySection>
    );
};

export default Projects;