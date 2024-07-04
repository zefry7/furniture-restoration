import React, { useContext } from "react";
import { UserContext } from "../../..";

function Types() {
    const data = useContext(UserContext)?.masterClassPage?.types

    return <section className="types section-obs">
        <div className="types__content">
            <div className="types__wrapper opacity-effect section-obs">
                <h3 className="types__title">{data?.title[0]}</h3>
                <div className="types__list">
                    {data?.items.map((v, i) => (
                        <div className="types__item tab-index" key={i} tabIndex={0}>
                            <div className="types__item-img">
                                <img src={v?.img?.src} alt={v?.img?.src} loading="lazy"/>
                            </div>
                            <p className="types__item-text">{v?.text}</p>
                        </div>
                    ))}

                </div>
            </div>
            <div className="types__wrapper opacity-effect section-obs">
                <h3 className="types__title">{data?.title[1]}</h3>
                <div className="types__block">
                    {data?.example.map((v, i) => (
                        <div className="types__block-wrap" key={i}>
                            <div className="types__block-img">
                                <img src={v?.img?.src} alt={v?.img?.alt} loading="lazy"/>
                            </div>
                            <p className="types__block-text">{v?.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default Types;