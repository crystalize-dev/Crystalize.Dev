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
                    <img title={'CSS'} alt={"css"} src={images.css}/>
                    <img title={'MongoDB'} alt={"mongo"} src={images.mongo}/>
                    <img title={'NodeJS'} alt={"nodejs"} src={images.node}/>
                    <img title={'NextJS'} alt={"next"} src={images.next}/>
                    <img title={'React'} alt={"react"} src={images.react}/>
                    <img title={'Tailwind'} alt={"tailwind"} src={images.tailwind} className={cl.tailwindFix}/>
                    <img title={'TypeScript'} alt={"ts"} src={images.ts} className={cl.tailwindFix}/>
                </div>
            </div>
        </MySection>
    );
};

export default General;