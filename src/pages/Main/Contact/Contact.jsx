import React from 'react';
import cl from "./Contcat.module.css"
import MySection from "../../../components/section/MySection";


const Contact = ({id}) => {
    return (
        <MySection className={cl.contact} id={id}>
            <h2>CONTACT</h2>
            <h1>Don't be shy! Hit me up! <i className="fa-solid fa-chevrons-down"></i></h1>

            <div className={cl.buttonArea}>
                <div className={cl.button}>
                    <i className="fa-solid fa-envelope"></i>
                    <div className={cl.buttonText}>
                        <h1>Mail</h1>
                        <a href={"mailto:man2123@mail.ru"}>man2123@mail.ru</a>
                    </div>
                </div>
                <div className={cl.button}>
                    <i className="fa-solid fa-paper-plane"></i>
                    <div className={cl.buttonText}>
                        <h1>Telegram</h1>
                        <a href={"https://web.telegram.org/k/"} target={"_blank"} rel="noreferrer">@zeen1tsu</a>
                    </div>
                </div>
            </div>
        </MySection>
    );
};

export default Contact;