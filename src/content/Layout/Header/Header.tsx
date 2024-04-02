import React, { useEffect, useRef, useState } from "react";

function Header(props) {
    const data = props.data;


    const burgerMenu = () => {
        const menuContent = document.querySelector(".header__menu-content")
        const blockContent = document.querySelector(".header__content")
        menuContent.classList.toggle("header__menu-burger_active")
        blockContent.classList.toggle("header__black-bg")
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            const sizeWindow = window.innerWidth; 
            if (sizeWindow > 768) {
                const menuContent = document.querySelector(".header__menu-content")
                const blockContent = document.querySelector(".header__content")
                menuContent.classList.remove("header__menu-burger_active")
                blockContent.classList.remove("header__black-bg")
            }
        })
    }, [])


    return (
        <header className="header">
            <div className="header__content">
                <div className="header__menu-content">
                    <div className="header__logo">
                        <img src={data.logo.img} alt={data.logo.alt} />
                    </div>
                    <nav className="header__links">
                        {data.links.map((value, index) => (
                            <a href="#" className="header__link" key={index}>{value}</a>
                        ))}
                    </nav>
                    <div className="header__menu-close" onClick={burgerMenu}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="header__menu-burger" onClick={burgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;