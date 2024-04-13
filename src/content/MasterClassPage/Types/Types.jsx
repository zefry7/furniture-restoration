import React from "react";

function Types(props) {
    const data = props.data

    return <section className="types">
        <div className="types__content">
            <h3 className="types__title">{data.title[0]}</h3>
            <div className="types__list">
                {data.items.map((v, i) => (
                    <div className="types__item" key={i}>
                        <div className="types__item-img">
                            <img src={v.img.src} alt={v.img.src} />
                        </div>
                        <p className="types__item-text">{v.text}</p>
                    </div>
                ))}

            </div>
            <h3 className="types__title">{data.title[1]}</h3>
            <div className="types__block">
                {data.example.map((v, i) => (
                    <div className="types__block-wrap" key={i}>
                        <div className="types__block-img">
                            <img src={v.img.src} alt={v.img.alt} />
                        </div>
                        <p className="types__block-text">{v.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Types;