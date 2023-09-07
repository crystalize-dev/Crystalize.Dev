import React from 'react';
import cl from "./MySection.module.css"


const MySection = ({className, id, children}) => {
    return (
        <section className={className} id={id}>
            <div className={cl.container}>
                {children}
            </div>
        </section>
    );
};

export default MySection;