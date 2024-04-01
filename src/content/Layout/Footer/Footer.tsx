import React from "react";


function Footer(props) {
    const data = props.data;

    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__inn">
                    <span>{data.ip}</span>
                    <span>{data.inn}</span>
                </p>
                {data.links.map((value, index) => (
                    <div className="footer__links" key={index}>
                        <a href="#" className="footer__link">{value[0]}</a>
                        <a href="#" className="footer__link">{value[1]}</a>
                    </div>
                ))}
                <div className="footer__socials">
                    {data.socials.map((value, index) => (
                        <div className="footer__socials-item" key={index}>
                            <img src={value.img} alt={value.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;