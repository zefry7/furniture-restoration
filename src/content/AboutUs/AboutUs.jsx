import React, { useContext } from "react";
import MyButton from "../../components/MyButton/MyButton";
import SwiperConstructor from "../../components/SwiperConstructor/SwiperConstructor";
import { UserContext } from "../..";

function AboutUs() {
    const data = useContext(UserContext).aboutUs

    document.title = "История создания мастерской NIKASON BRAND"

    return <section className="about-us">
        <div className="about-us__content">
            <h1 className="about-us__title">{data?.titles[0]?.p1}<span>{data?.titles[0]?.p2}</span></h1>
            <div className="about-us__main-img">
                <img src={data?.mainImg?.src} alt={data?.mainImg?.alt} />
            </div>
            <div className="about-us__facts">
                {data?.facts.map((v, i) => (
                    <p className="about-us__facts-text" key={i}><span>{v[0]}</span>{v[1]}</p>
                ))}
            </div>
            <div className="about-us__info">
                <div className="about-us__info-left">
                    <img src={data?.info?.img?.src} alt={data?.info?.img?.alt} />
                </div>
                <div className="about-us__info-rigth">
                    <p className="about-us__name">{data?.info?.name[0]} <span>{data?.info?.name[1]}</span></p>
                    <p className="about-us__role">{data?.info?.role}</p>
                    <div className="about-us__block-text">
                        {data?.info?.text.map((v, i) => (
                            <p className="about-us__text" key={i}>{v}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="about-us__idea">
                <h2 className="about-us__idea-title">{data?.titles[1]}</h2>
                <p className="about-us__idea-text">{data?.ideaText[0]} <span>{data?.ideaText[1]}</span></p>
            </div>

            <div className="about-us__media">
                <h2 className="about-us__media-title">{data?.titles[2]}</h2>
                <p className="about-us__media-text">{data?.mediaText}</p>
                <SwiperConstructor setting={"swiperMedia"} data={data?.mediaItems} />
            </div>
            <div className="feedback">
                <h2 className="feedback__title">{data?.feedback?.title}</h2>
                <MyButton class="feedback__button" text={data?.feedback?.button} />
            </div>
        </div>
    </section>
}

export default AboutUs;