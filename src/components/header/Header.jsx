import React, {useState} from 'react';
import cl from "./Header.module.css";
import {images} from "../../img/main/images";
import classnames from "classnames";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import {useTranslation} from "i18nano";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const text = useTranslation()

    return (
        <>
            <header className={cl.header}>
                <div className={cl.headerContainer}>
                    <img src={images.logo} alt={"logo"}/>
                    <h1>Crystalize.dev</h1>

                    <a href={"#home"}>{text('header.links.home')}</a>
                    <a href={"#about"}>{text('header.links.about')}</a>
                    <a href={"#projects"}>{text('header.links.proj')}</a>
                    <a href={"#contact"}>{text('header.links.contact')}</a>
                    <LangSwitcher className={cl.langSwitcher}/>

                    <i onClick={() => setToggle(true)} className="fa-solid fa-bars"></i>
                </div>
            </header>

            <div className={toggle ? classnames(cl.modalMobile, cl.show) : cl.modalMobile}>
                <i onClick={() => setToggle(false)} className="fa-solid fa-xmark"></i>

                <LangSwitcher text={true} className={cl.mobileLangSwitcher}/>
                <a onClick={() => setToggle(false)} href={"#home"}>{text('header.links.home')}</a>
                <a onClick={() => setToggle(false)} href={"#about"}>{text('header.links.about')}</a>
                <a onClick={() => setToggle(false)} href={"#projects"}>{text('header.links.proj')}</a>
                <a onClick={() => setToggle(false)} href={"#contact"}>{text('header.links.contact')}</a>
            </div>
        </>
    );
};

export default Header;