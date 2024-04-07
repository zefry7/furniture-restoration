import React from "react";

function Assurance(props) {
    const data = props.data;

    return <section className="assurance">
        <div className="assurance__content">
            <div className="assurance__wrap-info">
                <h3 className="assurance__title">{data.title}</h3>
                <p className="assurance__text">{data.text}</p>
                <div className="assurance__logo">
                    <img src={data.img.src} alt={data.img.alt} />
                </div>
            </div>
        </div>
    </section>
}

export default Assurance;