import React, { useCallback, useContext, useRef, useState, useEffect } from "react";
import MyButton from "../../components/MyButton/MyButton";
import { UserContext } from "../..";
import SwiperConstructor from "../../components/SwiperConstructor/SwiperConstructor";

function Workshop() {
    const data = useContext(UserContext).workshop;
    const srcImg = useRef(data.portfolio.imgs[0].src)
    const [img, setImg] = useState(srcImg.current)

    document.title = "Мебель на заказ от NIKASON BRAND"

    const changeImg = useCallback(() => {
        const el = document.querySelector(".workshop__portfolio .swiper-slide-active")
        if (el) {
            srcImg.current = el.children[0].src
            setImg(srcImg.current)
        }
    }, [])

    return <section className="workshop">
        <div className="workshop__content">
            <div className="workshop__intro">
                <p className="workshop__intro-subtitle">{data?.intro?.subtitle}</p>
                <h1 className="workshop__intro-title"><span>{data?.intro?.title[0]}</span>{data?.intro?.title[1]}</h1>
                <MyButton class={"workshop__intro-button"} text={data?.intro?.button}></MyButton>
            </div>
            <div className="workshop__wrap">
                <div className="workshop__select">
                    <h2 className="workshop__select-title">{data?.select?.title}</h2>
                    <div className="workshop__select-grid">
                        {data?.select?.items.map((v, i) => (
                            <div className="workshop__select-item" key={i}>
                                <h4 className="workshop__select-item-title">{v?.title}</h4>
                                <hr />
                                <p className="workshop__select-item-text">{v?.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="workshop__portfolio">
                    <h2 className="workshop__portfolio-title">{data?.portfolio?.title}</h2>
                    <div className="workshop__portfolio-wrap">
                        <div className="workshop__portfolio-main-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="workshop__portfolio-block">
                            <div className="workshop__portfolio-prev"></div>
                            <SwiperConstructor funChange={changeImg} setting={data?.portfolio?.settingSwiper} data={data?.portfolio?.imgs} />
                            <div className="workshop__portfolio-next"></div>
                        </div>
                    </div>
                </div>
                <div className="workshop__stage">
                    <h2 className="workshop__stage-title">{data?.stage?.title}</h2>
                    <div className="workshop__stage-grid">
                        {data?.stage?.items.map((v, i) => (
                            <div className="workshop__stage-item" data-index={i + 1} key={i}>
                                <p className="workshop__stage-text">{v}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="workshop__comment">
                    <h2 className="workshop__comment-title">{data?.comment?.title}</h2>
                    <SwiperConstructor setting={data?.comment?.settingSwiper} data={data?.comment?.img} />
                </div>
                <div className="feedback">
                    <h2 className="feedback__title">{data?.feedback?.title}</h2>
                    <MyButton class="feedback__button" text={data?.feedback?.button} />
                </div>
            </div>
        </div>
    </section>
}

export default Workshop;