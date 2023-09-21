import React from 'react';
import cl from "./Main.module.css"

import Header from "../components/header/Header";
import General from "./General/General";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "../components/footer/Footer";
import {useInView} from "react-intersection-observer";
import ArrowUp from "../components/ArrowUp/ArrowUp";


const Main = () => {
    const {ref, inView} = useInView()

    return (
        <div className={cl.wrapper}>
            <Header />

            <ArrowUp inView={inView}/>

            <div className={cl.content}>
                <div ref={ref} className={cl.invisibleAnchor} id={"start"}/>

                <General id={"home"} />

                <About id={"about"} />

                <Projects id={"projects"} />

                <Contact id={'contact'} />

                <Footer />
            </div>
        </div>
    );
};

export default Main;