import React from "react";

function Techniques(props) {
    const data = props.data

    return <section className="techniques">
        <div className="techniques__content">
            <div className="techniques__info">
                <h2 className="techniques__title">{data.title}</h2>
                <ul className="techniques__list">
                    {data.ul.map((v, i) => (
                        <li className="techniques__item" key={i} data-index={i + 1}>
                            {v}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="techniques__block">
                <h3 className="techniques__text">{data.text}</h3>
            </div>
        </div>
    </section>
}

export default Techniques;