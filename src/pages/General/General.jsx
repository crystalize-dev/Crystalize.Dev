import React from 'react';
import cl from "./General.module.css"
import {images} from "../../img/main/images";
import MySection from "../../components/section/MySection";
import {useTranslation} from "i18nano";


const General = ({id}) => {
    const text = useTranslation()

    return (
        <MySection id={id}>
            <div className={cl.main}>
                <div className={cl.me}>
                    <img alt={"me"} src={images.me}/>
                </div>

                <div className={cl.text}>
                    <h1>{text('general.h1')}</h1>
                    <p>{text('general.p')}</p>

                    <div className={cl.links}>
                        <a href="https://hh.ru/resume/a2c6b2b4ff09b9e7e90039ed1f387057344159"
                           target="_blank" rel="noreferrer"><img alt={"hh"} src={images.hh}/></a>
                        <a href="https://github.com/crystalize-dev" target="_blank" rel="noreferrer"><img
                            alt={"git"}
                            src={images.git}/></a>
                    </div>
                </div>
            </div>

            <div className={cl.skills}>
                <p>{text('general.tech')}</p>
                <hr className={cl.line}/>
                <div className={cl.skillsImg}>
                    <img title={'HTML'} alt={"html"} src={images.html}/>
                    <img title={'css'} alt={"css"} src={images.css}/>
                    <img title={'javaScript'} alt={"js"} src={images.js}/>
                    <img title={'ReactJS'} alt={"react"} src={images.react}/>
                </div>
            </div>
        </MySection>
    );
};

export default General;