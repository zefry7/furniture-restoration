import React, { useContext } from "react";
import { UserContext } from "../../..";

function Techniques() {
    const data = useContext(UserContext)?.masterClassPage?.techniques

    return <section className="techniques section-obs">
        <div className="techniques__content">
            <div className="techniques__info opacity-effect section-obs">
                <h2 className="techniques__title">{data?.title}</h2>
                <ul className="techniques__list">
                    {data?.ul.map((v, i) => (
                        <li className="techniques__item" key={i} data-index={i + 1}>
                            {v}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="techniques__block opacity-effect section-obs">
                <h3 className="techniques__text">{data?.text}</h3>
            </div>
        </div>
    </section>
}

export default Techniques;