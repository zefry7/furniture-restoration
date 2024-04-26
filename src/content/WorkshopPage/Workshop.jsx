import React, { useContext } from "react";
import MyButton from "../../components/MyButton/MyButton";
import { UserContext } from "../..";
import SwiperConstructor from "../../components/SwiperConstructor/SwiperConstructor";

function Workshop() {
    const feedbackData = useContext(UserContext).feedback;
    const data = useContext(UserContext).workshop;

    return <section className="workshop">
        <div className="workshop__content">
            <div className="workshop__intro">
                <p className="workshop__intro-subtitle">{data.intro.subtitle}</p>
                <h1 className="workshop__intro-title"><span>{data.intro.title[0]}</span>{data.intro.title[1]}</h1>
                <MyButton class={"workshop__intro-button"} text={data.intro.button}></MyButton>
            </div>
            <div className="workshop__wrap">
                <div className="workshop__select">
                    <h2 className="workshop__select-title">{data.select.title}</h2>
                    <div className="workshop__select-grid">
                        {data.select.items.map((v, i) => (
                            <div className="workshop__select-item" key={i}>
                                <h4 className="workshop__select-item-title">{v.title}</h4>
                                <hr />
                                <p className="workshop__select-item-text">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="workshop__stage">
                    <h2 className="workshop__stage-title">{data.stage.title}</h2>
                    <div className="workshop__stage-grid">
                        {data.stage.items.map((v, i) => (
                            <div className="workshop__stage-item" data-index={i + 1} key={i}>
                                <p className="workshop__stage-text">{v}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="workshop__comment">
                    <h2 className="workshop__comment-title">{data.comment.title}</h2>
                    <SwiperConstructor data={data.comment.img} />
                </div>
                <div className="feedback">
                    <h2 className="feedback__title">{feedbackData.title}</h2>
                    <MyButton class="feedback__button" text={feedbackData.button} />
                </div>
            </div>
        </div>
    </section>
}

export default Workshop;