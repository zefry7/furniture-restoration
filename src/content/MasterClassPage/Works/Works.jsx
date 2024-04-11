import React from "react";

function Works(props) {
    const data = props.data;

    return <section className="works">
        <div className="works__content">
            <div className="works__info">
                <div className="works__info-img">
                    <img src={data.info.img.src} alt={data.info.img.alt} />
                </div>
                <h2 className="works__info-text">{data.info.text}</h2>
                <button className="works__info-button" data-text={data.info.button.text}></button>
            </div>
            <div className="works__block">
                <h3 className="works__block-title">{data.title}</h3>
                <div className="works__block-wrap">
                    {data.workImg.map((v, i) => {
                        return <div className="works__block-item" key={i}>
                            <div className="works__block-img">
                                <img src={v.src} alt={v.alt} />
                            </div>
                            { i % 2 == 0 
                                ? <p className="works__block-text">{data.text[i % 2]}</p>                    
                                : <p className="works__block-text">{data.text[i % 2]}</p> 
                            }
                        </div>
                    })}
                </div>
                <button className="works__block-button" data-text={data.button.text}></button>
            </div>
        </div>
    </section>
}

export default Works;