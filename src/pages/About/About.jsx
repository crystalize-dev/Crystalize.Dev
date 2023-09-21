import React from 'react';
import cl from "./About.module.css"
import {images} from "../../img/main/images";
import MySection from "../../components/section/MySection";
import {useTranslation} from "i18nano";


const About = ({id}) => {
    const text = useTranslation()

    return (
        <MySection id={id} className={cl.about}>
            <div className={cl.aboutBlock}>
                <div className={cl.aboutImg}>
                    <img alt={"laptop"} src={images.laptop}/>

                    <div className={cl.roundRotate}>
                        <img alt={"text"} src={images.text}/>
                        <i className="fa-solid fa-laptop-code"></i>
                    </div>
                </div>

                <div className={cl.aboutText}>
                    <h2>{text('about.h2')}</h2>
                    <h1>{text('about.h1')}</h1>
                    <p>{text('about.p')}</p>
                </div>
            </div>
        </MySection>
    );
};

export default About;