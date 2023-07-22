import React, {useState} from 'react';
import classnames from "classnames";
import Icon from "../../components/icon/icon";

import cl from "./Guest.module.css";
import logo from "../../img/logo.png"
import css from '../../img/guest/css.png'
import me from '../../img/guest/me.jpg'
import git from '../../img/guest/git.png'
import js from '../../img/guest/js.png'
import html from '../../img/guest/html.png'
import hh from '../../img/guest/hh.png'
import react from '../../img/guest/react.png'
import laptop from '../../img/guest/laptop.jpg'
import text from "../../img/guest/text.svg"
import {Link} from "react-router-dom";


const Guest = () => {
    const [toggle, setToggle] = useState(false)


    return (
        <>
            <header className={cl.header}>
                <img src={logo} alt={"logo"}/>
                <h1>Crystalize.dev</h1>

                <a href={"#home"}>Home</a>
                <a href={"#about"}>About</a>
                <a href={"#projects"}>Projects</a>
                <a href={"#contact"}>Contact</a>

                <Icon onClick={() => setToggle(true)}>menu</Icon>
            </header>

            <div className={toggle ? classnames(cl.modalMobile, cl.show) : cl.modalMobile}>
                <Icon onClick={() => setToggle(false)}>close</Icon>

                <a onClick={() => setToggle(false)} href={"#home"}>Home</a>
                <a onClick={() => setToggle(false)} href={"#about"}>About</a>
                <a onClick={() => setToggle(false)} href={"#projects"}>Projects</a>
                <a onClick={() => setToggle(false)} href={"#contact"}>Projects</a>
            </div>

            <div className={cl.content}>
                <section id={"home"} className={cl.section}>
                    <div className={cl.container}>
                        <div className={cl.main}>
                            <div className={cl.me}>
                                <img alt={"me"} src={me}/>
                            </div>

                            <div className={cl.text}>
                                <h1>Front-End React Developer</h1>
                                <p>Hi, I'm Igor Andreev. A passionate Front-end React Developer based in Moscow</p>

                                <div className={cl.links}>
                                    <a href="https://hh.ru/resume/a2c6b2b4ff09b9e7e90039ed1f387057344159"
                                       target="_blank" rel="noreferrer"><img alt={"hh"} src={hh}/></a>
                                    <a href="https://github.com/crystalize-dev" target="_blank" rel="noreferrer"><img
                                        alt={"git"}
                                        src={git}/></a>
                                </div>
                            </div>
                        </div>

                        <div className={cl.skills}>
                            <p>Tech Stack</p>
                            <hr/>
                            <div className={cl.skillsImg}>
                                <img alt={"html"} src={html}/>
                                <img alt={"css"} src={css}/>
                                <img alt={"js"} src={js}/>
                                <img alt={"react"} src={react}/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id={"about"} className={classnames(cl.section, cl.about)}>
                    <div className={cl.container}>
                        <div className={cl.aboutBlock}>
                            <div className={cl.aboutImg}>
                                <img alt={"laptop"} src={laptop}/>

                                <div className={cl.roundRotate}>
                                    <img alt={"text"} src={text}/>
                                    <Icon>laptop_mac</Icon>
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
                    </div>
                </section>

                <section id={"projects"} className={classnames(cl.section, cl.projects)}>
                    <div className={cl.container}>
                        <h2>PORTFOLIO</h2>
                        <h1>Each project is a unique piece of development</h1>

                        <div className={cl.projectCard}>
                            <div className={cl.window}>
                                <img src={"#"} alt={"preview"}/>
                            </div>

                            <div className={cl.projectText}>
                                <h1>Name</h1>
                                <p>Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                                    reprehenderit.</p>
                                <div className={cl.tags}>
                                    <div className={cl.tag}>React</div>
                                    <div className={cl.tag}>SCSS</div>
                                </div>
                                <div className={cl.options}>
                                    <a>Code <img alt={"git"} src={git}/></a>
                                    <Link>Live Demo <Icon>open_in_new</Icon></Link>
                                </div>
                            </div>
                        </div>

                        <div className={cl.projectCard}>
                            <div className={cl.window}>
                                <img src={"#"} alt={"preview"}/>
                            </div>

                            <div className={cl.projectText}>
                                <h1>Name</h1>
                                <p>Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                                    reprehenderit.</p>
                                <div className={cl.tags}>
                                    <div className={cl.tag}>React</div>
                                    <div className={cl.tag}>SCSS</div>
                                </div>
                                <div className={cl.options}>
                                    <a>Code <img alt={"git"} src={git}/></a>
                                    <Link>Live Demo <Icon>open_in_new</Icon></Link>
                                </div>
                            </div>
                        </div>

                        <div className={cl.projectCard}>
                            <div className={cl.window}>
                                <img src={"#"} alt={"preview"}/>
                            </div>

                            <div className={cl.projectText}>
                                <h1>Name</h1>
                                <p>Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                                    reprehenderit.</p>
                                <div className={cl.tags}>
                                    <div className={cl.tag}>React</div>
                                    <div className={cl.tag}>SCSS</div>
                                </div>
                                <div className={cl.options}>
                                    <a>Code <img alt={"git"} src={git}/></a>
                                    <Link>Live Demo <Icon>open_in_new</Icon></Link>
                                </div>
                            </div>
                        </div>

                        <div className={cl.projectCard}>
                            <div className={cl.window}>
                                <img src={"#"} alt={"preview"}/>
                            </div>

                            <div className={cl.projectText}>
                                <h1>Name</h1>
                                <p>Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                                    reprehenderit.</p>
                                <div className={cl.tags}>
                                    <div className={cl.tag}>React</div>
                                    <div className={cl.tag}>SCSS</div>
                                </div>
                                <div className={cl.options}>
                                    <a>Code <img alt={"git"} src={git}/></a>
                                    <Link>Live Demo <Icon>open_in_new</Icon></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id={"contact"} className={classnames(cl.section, cl.contact)}>
                    <div className={cl.container}>
                        <h2>CONTACT</h2>
                        <h1>Don't be shy! Hit me up! <Icon>keyboard_double_arrow_down</Icon></h1>

                        <div className={cl.buttonArea}>
                            <div className={cl.button}>
                                <Icon>mail</Icon>
                                <div className={cl.buttonText}>
                                    <h1>Mail</h1>
                                    <a href={"mailto:man2123@mail.ru"}>man2123@mail.ru</a>
                                </div>
                            </div>
                            <div className={cl.button}>
                                <Icon>send</Icon>
                                <div className={cl.buttonText}>
                                    <h1>Telegram</h1>
                                    <a href={"#"}>@zeen1tsu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className={cl.footer}>
                    <div className={cl.container}>
                        <h1>Copyright © 2023. All rights are reserved</h1>

                        <div className={cl.links}>
                            <a href="https://hh.ru/resume/a2c6b2b4ff09b9e7e90039ed1f387057344159"
                               target="_blank" rel="noreferrer"><img alt={"hh"} src={hh}/></a>
                            <a href="https://github.com/crystalize-dev" target="_blank" rel="noreferrer"><img
                                alt={"git"}
                                src={git}/></a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Guest;