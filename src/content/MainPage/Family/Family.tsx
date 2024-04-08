import React from "react";
import MyButton from "../../../components/MyButton/MyButton"

function Family(props) {
    const data = props.data
    return <section className="family">
        <div className="family__content">
            <h2 className="family__title">{data.title[0]}</h2>
            <div className="family__block">
                <div className="family__img">
                    <img src={data.img.src} alt={data.img.alt} />
                </div>
                <div className="family__info">
                    <p className="family__author">{data.author}</p>
                    <p className="family__text">{data.text[0]}</p>
                    <p className="family__text">{data.text[1]}</p>
                    <MyButton class={"family__button"} text={data.buttonText}/>
                </div>
            </div>
            <h2 className="family__title">{data.title[1]}</h2>
            <div className="family__video-wrap">
                <video className="family__video" controls>
                </video>
            </div>
        </div>
    </section>
}

export default Family