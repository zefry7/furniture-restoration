import React, { useCallback, useContext, useRef, useState, useEffect } from "react";
import MyButton from "../../components/MyButton/MyButton";
import { UserContext } from "../..";
import SwiperConstructor from "../../components/SwiperConstructor/SwiperConstructor";
import { showObserver } from "../../styles/script/showObserver";

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

    useEffect(() => {
        showObserver()
    }, [])

    return <section className="workshop">
        <div className="workshop__content">
            <div className="workshop__intro opacity-effect section-obs">
                <p className="workshop__intro-subtitle">{data?.intro?.subtitle}</p>
                <h1 className="workshop__intro-title"><span>{data?.intro?.title[0]}</span>{data?.intro?.title[1]}</h1>
                <MyButton class={"workshop__intro-button tab-index"} text={data?.intro?.button}></MyButton>
            </div>
            <div className="workshop__wrap">
                <div className="workshop__select opacity-effect section-obs">
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
                <div className="workshop__portfolio opacity-effect section-obs">
                    <h2 className="workshop__portfolio-title">{data?.portfolio?.title}</h2>
                    <div className="workshop__portfolio-wrap">
                        <div className="workshop__portfolio-main-img">
                            <img src={img} alt="Пример работы" loading="lazy" />
                        </div>
                        <div className="workshop__portfolio-block">
                            <button className="workshop__portfolio-prev tab-index" aria-label="Сдвиг свайпера вправо"></button>
                            <SwiperConstructor funChange={changeImg} setting={data?.portfolio?.settingSwiper} data={data?.portfolio?.imgs} />
                            <button className="workshop__portfolio-next tab-index" aria-label="Сдвиг свайпера влево"></button>
                        </div>
                    </div>
                </div>
                <div className="workshop__stage opacity-effect section-obs">
                    <h2 className="workshop__stage-title">{data?.stage?.title}</h2>
                    <div className="workshop__stage-grid">
                        {data?.stage?.items.map((v, i) => (
                            <div className="workshop__stage-item" data-index={i + 1} key={i}>
                                <p className="workshop__stage-text">{v}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="workshop__comment opacity-effect section-obs">
                    <h2 className="workshop__comment-title">{data?.comment?.title}</h2>
                    <SwiperConstructor setting={data?.comment?.settingSwiper} data={data?.comment?.img} />
                </div>
                <div className="feedback opacity-effect section-obs">
                    <h2 className="feedback__title">{data?.feedback?.title}</h2>
                    <MyButton class="feedback__button tab-index" text={data?.feedback?.button} />
                </div>
            </div>
        </div>
    </section>
}

export default Workshop;