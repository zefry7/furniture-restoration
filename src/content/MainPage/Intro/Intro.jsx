import React, { useContext } from "react"
import MyButton from "../../../components/MyButton/MyButton"
import { UserContext } from "../../..";

function Intro() {
    const data = useContext(UserContext)?.mainPage?.intro
    
    return (
        <section className="intro">
            <div className="intro__content">
                <div className="intro__main-img">
                    <img src={data?.mainImg?.src} alt={data?.mainImg?.alt} />
                </div>
                <div className="intro__info">
                    <p className="intro__label">{data?.label}</p>
                    <h2 className="intro__title">{data?.title}</h2>
                    <p className="intro__subtitle">{data?.subtitle}</p>
                    <MyButton class={"intro__button"} text={data?.button?.text} href={data?.button?.href}/>
                    <div className="intro__socials">
                        {data?.icons.map((value, index) => (
                            <div className="intro__socials-item" key={index}>
                                <img src={value?.src} alt={value?.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro