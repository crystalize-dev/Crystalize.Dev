import React from 'react';
import cl from "./Projects.module.css";
import MySection from "../../components/section/MySection";
import {projects} from "../../projects/projects";
import ProjectCard from "../../components/projectCard/projectCard";
import {useTranslation, useTranslationChange} from "i18nano";


const Projects = ({id}) => {
    const text = useTranslation()
    const lang = useTranslationChange().lang

    return (
        <MySection id={id} className={cl.projects}>
            <h2>{text('projects.h2')}</h2>
            <h1>{text("projects.h1")}</h1>

            {projects.map(project =>
                <ProjectCard key={project.name}
                             name={project.name}
                             src={project.src}
                             description={lang === 'ru' ? project.description.ru : project.description.en}
                             git={project.git}
                             link={project.link}
                             tags={project.tags}/>
            )}
        </MySection>
    );
};

export default Projects;