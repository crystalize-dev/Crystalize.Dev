import React from 'react';
import cl from "./Contcat.module.css"
import MySection from "../../components/section/MySection";
import {useTranslation} from "i18nano";


const Contact = ({id}) => {
    const text = useTranslation()

    return (
        <MySection className={cl.contact} id={id}>
            <h1>{text('contact.h1')}<i className="fa-solid fa-chevrons-down"></i></h1>
            <h2>{text('contact.h2')}</h2>

            <div className={cl.buttonArea}>

                <a href={"mailto:man2123@mail.ru"} className={cl.button}>
                    <i className="fa-solid fa-envelope"></i>
                    <div className={cl.buttonText}>
                        <h1>Mail</h1>
                        <p>man2123@mail.ru</p>
                    </div>
                </a>

                <a href={"https://t.me/zeen1tsu"} target={"_blank"} className={cl.button} rel="noreferrer">
                    <i className="fa-solid fa-paper-plane"></i>
                    <div className={cl.buttonText}>
                        <h1>Telegram</h1>
                        <p>@zeen1tsu</p>
                    </div>
                </a>
            </div>
        </MySection>
    );
};

export default Contact;