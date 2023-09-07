import React from 'react';
import cl from "./ProjectCard.module.css"
import {images} from "../../img/main/images";
import {Link} from "react-router-dom";


const ProjectCard = ({src, name, description, git, link, tags}) => {
    return (
        <div className={cl.projectCard}>
            <div className={cl.window}>
                <img src={src} alt={"preview"}/>
            </div>

            <div className={cl.projectText}>
                <h1>{name}</h1>
                <p>{description}</p>
                <div className={cl.tags}>
                    {tags.map(tag => <div key={tag} className={cl.tag}>{tag}</div>)}
                </div>
                <div className={cl.options}>
                    <a href={git}>Code <img alt={"git"} src={images.git}/></a>
                    <Link to={link}>Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;