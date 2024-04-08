import React from "react"
import MyButton from "../../../components/MyButton/MyButton"

function Intro(props) {
    const data = props.data;
    return (
        <section className="intro">
            <div className="intro__content">
                <div className="intro__main-img">
                    <img src={data.mainImg.img} alt={data.mainImg.alt} />
                </div>
                <div className="intro__info">
                    <p className="intro__label">{data.label}</p>
                    <h2 className="intro__title">{data.title}</h2>
                    <p className="intro__subtitle">{data.subtitle}</p>
                    <MyButton class={"intro__button"} text={data.button}/>
                    <div className="intro__socials">
                        {data.icons.map((value, index) => (
                            <div className="intro__socials-item" key={index}>
                                <img src={value.img} alt={value.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro