import React from 'react';
import cl from "./ProjectCard.module.css"
import {images} from "../../img/main/images";
import {Link} from "react-router-dom";
import {useTranslation} from "i18nano";


const ProjectCard = ({src, name, description, git, link, tags}) => {
    const text = useTranslation()

    return (
        <div className={cl.projectCard}>
            <h1 className={cl.showMobile}>{name}</h1>

            <div className={cl.window}>
                <a href={link} target={"_blank"} rel="noreferrer"><img src={src} alt={"preview"}/></a>
            </div>

            <div className={cl.projectText}>
                <h1 className={cl.hideMobile}>{name}</h1>
                <p>{description}</p>
                <div className={cl.tags}>
                    {tags.map(tag => <div key={tag} className={cl.tag}>{tag}</div>)}
                </div>
                <div className={cl.options}>
                    <a href={git} target={"_blank"} rel="noreferrer">{text('card.code')} <img alt={"git"} src={images.git}/></a>
                    <Link to={link}>{text('card.live')} <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;