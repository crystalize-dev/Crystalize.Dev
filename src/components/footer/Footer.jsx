import React from 'react';
import cl from "./Footer.module.css"
import {images} from "../../img/main/images";


const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.container}>
                <h1>Copyright © 2023. All rights are reserved</h1>

                <div className={cl.links}>
                    <a href="https://hh.ru/resume/a2c6b2b4ff09b9e7e90039ed1f387057344159"
                       target="_blank" rel="noreferrer"><img alt={"hh"} src={images.hh}/></a>
                    <a href="https://github.com/crystalize-dev" target="_blank" rel="noreferrer"><img
                        alt={"git"}
                        src={images.git}/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;