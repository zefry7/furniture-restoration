import React from "react";
import MyButton from "../../../components/MyButton/MyButton";
import { useContext } from "react";
import { UserContext } from "../../..";

function Works() {
    const data = useContext(UserContext)?.masterClassPage?.work

    return <section className="works">
        <div className="works__content">
            <div className="works__info">
                <h2 className="works__info-text">{data?.info?.text}</h2>
                <MyButton class="works__info-button" text={data?.info?.button?.text}/>
            </div>
            <div className="works__block">
                <h3 className="works__block-title">{data?.title}</h3>
                <div className="works__block-wrap">
                    {data?.workImg.map((v, i) => {
                        return <div className="works__block-item" key={i}>
                            <div className="works__block-img">
                                <img src={v?.src} alt={v?.alt} />
                            </div>
                            { i % 2 == 0 
                                ? <p className="works__block-text">{data?.text[i % 2]}</p>                    
                                : <p className="works__block-text">{data?.text[i % 2]}</p> 
                            }
                        </div>
                    })}
                </div>
                <MyButton class="works__block-button" text={data?.button?.text}/>
            </div>
        </div>
    </section>
}

export default Works;