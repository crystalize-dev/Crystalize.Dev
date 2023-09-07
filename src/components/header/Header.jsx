import React, {useState} from 'react';
import cl from "./Header.module.css";
import {images} from "../../img/main/images";
import classnames from "classnames";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <header className={cl.header}>
                <div className={cl.headerContainer}>
                    <img src={images.logo} alt={"logo"}/>
                    <h1>Crystalize.dev</h1>

                    <a href={"#home"}>Home</a>
                    <a href={"#about"}>About</a>
                    <a href={"#projects"}>Projects</a>
                    <a href={"#contact"}>Contact</a>

                    <i onClick={() => setToggle(true)} className="fa-solid fa-bars"></i>
                </div>
            </header>

            <div className={toggle ? classnames(cl.modalMobile, cl.show) : cl.modalMobile}>
                <i onClick={() => setToggle(false)} className="fa-solid fa-xmark"></i>

                <a onClick={() => setToggle(false)} href={"#home"}>Home</a>
                <a onClick={() => setToggle(false)} href={"#about"}>About</a>
                <a onClick={() => setToggle(false)} href={"#projects"}>Projects</a>
                <a onClick={() => setToggle(false)} href={"#contact"}>Contact</a>
            </div>
        </>
    );
};

export default Header;