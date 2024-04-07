import React from "react"

function Services(props) {
    const data = props.data;

    return <section className="services">
        <div className="services__content">
            <h2 className="services__title">{data.title}</h2>
            <div className="services__items">
                {data.items.map((item, index) => (
                    <div className="services__item" key={index}>
                        <div className="services__item-img">
                            <img src={item.img.src} alt={item.img.alt} />
                        </div>
                        <div className="services__item-info">
                            <h5 className="services__item-title">{item.title}</h5>
                            <p className="services__item-text">{item.text}</p>
                            <button className="services__item-button" data-text={item.button}></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}

export default Services;