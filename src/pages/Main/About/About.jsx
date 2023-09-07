import React from 'react';
import cl from "./About.module.css"
import {images} from "../../../img/main/images";
import MySection from "../../../components/section/MySection";


const About = ({id}) => {
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
                    <h2>ABOUT ME</h2>
                    <h1>A dedicated Front-end Developer
                        based in Moscow</h1>
                    <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML,
                        CSS, JavaScript and React. I excel in designing and maintaining
                        responsive websites that offer a smooth user experience. My expertise lies in
                        crafting dynamic, engaging interfaces through writing clean and optimized code and
                        utilizing cutting-edge development tools and techniques. I am also a team player who
                        thrives in collaborating with cross-functional teams to produce outstanding web
                        applications.
                    </p>
                </div>
            </div>
        </MySection>
    );
};

export default About;