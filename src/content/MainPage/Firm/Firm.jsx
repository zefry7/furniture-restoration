import React from "react";
import { useContext } from "react";
import { UserContext } from "../../..";

function Firm() {
    const data = useContext(UserContext).mainPage.firm

    return (
        <section className="firm section-obs">
            <div className="firm__content">
                <h2 className="firm__title-1">{data?.title1}</h2>
                <div className="firm__row-text">
                    {data?.text.map((value, index) => (
                        <p className="firm__text" key={index}>{value}</p>
                    ))}
                </div>
                <h3 className="firm__title-2">{data?.title2}</h3>
                <div className="firm__block">
                    {data?.items.map((value, index) => (
                        <div className="firm__item" key={index}>
                            <div className="firm__item-img">
                                <img src={value?.img?.src} alt={value?.img?.alt} loading="lazy"/>
                            </div>
                            <p className="firm__item-text">{value?.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Firm;