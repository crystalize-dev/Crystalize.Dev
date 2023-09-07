import React from 'react';
import cl from "./Main.module.css"

import Header from "../../components/header/Header";
import General from "./General/General";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "../../components/footer/Footer";


const Main = () => {
    return (
        <>
            <Header />

            <div className={cl.content}>
                <General id={"home"} />

                <About id={"about"} />

                <Projects id={"projects"} />

               <Contact id={'contact'} />

                <Footer />
            </div>
        </>
    );
};

export default Main;