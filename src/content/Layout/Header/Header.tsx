import React from "react";


function Header(props) {
    const data = props.data;
    return (
        <header className="header">
            <div className="header__content">
                <nav className="header__links">
                    {data.links.map((value, index) => (
                        <a href="#" className="header__link" key={index}>{value}</a>
                    ))}
                </nav>
                <div className="header__logo">
                    <img src={data.logo.img} alt={data.logo.alt} />
                </div>
            </div>
        </header>
    )
}

export default Header;