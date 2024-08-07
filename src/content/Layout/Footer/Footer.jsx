import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../..";

function Footer() {
    const data = useContext(UserContext).footer

    const moveUp = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer className="footer opacity-effect section-obs" id="section-footer">
            <div className="footer__content">
                <p className="footer__inn">
                    <span>{data?.ip}</span>
                    <span>{data?.inn}</span>
                </p>
                <div className="footer__content-center">
                    {data?.links.map((value, index) => (
                        <div className="footer__links" key={index}>
                            <Link to={value[0]?.href} className="footer__link tab-index" key={index} onClick={(e) => moveUp(e)}>{value[0]?.text}</Link>
                            <Link to={value[1]?.href} className="footer__link tab-index" key={index + 3} onClick={(e) => moveUp(e)}>{value[1]?.text}</Link>
                        </div>
                    ))}
                </div>
                <div className="footer__socials">
                    {data?.socials.map((value, index) => (
                        <button className="footer__socials-item tab-index" key={index}>
                            <img src={value?.img} alt={value?.alt} loading="lazy"/>
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;