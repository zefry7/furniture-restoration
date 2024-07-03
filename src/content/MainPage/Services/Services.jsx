import React, { useContext } from "react"
import MyButton from "../../../components/MyButton/MyButton"
import { UserContext } from "../../.."


function Services() {
    const data = useContext(UserContext)?.mainPage?.services
 
    return <section className="services section-obs">
        <div className="services__content">
            <h2 className="services__title">{data?.title}</h2>
            <div className="services__items">
                {data?.items.map((item, index) => (
                    <div className="services__item" key={index}>
                        <div className="services__item-img">
                            <img src={item?.img?.src} alt={item?.img?.alt} loading="lazy" />
                        </div>
                        <div className="services__item-info">
                            <h3 className="services__item-title">{item?.title}</h3>
                            <p className="services__item-text">{item?.text}</p>
                            <MyButton class={"services__item-button tab-index"} text={item?.button?.text} href={item?.button?.href}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}

export default Services;