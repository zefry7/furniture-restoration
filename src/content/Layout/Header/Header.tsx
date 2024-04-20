import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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


    const moveToBlock = (e) => {
        e.preventDefault()
        var attr = e.target.getAttribute("data-section");

        console.log(attr)
        window.scrollTo({
            top: document.getElementById(attr).offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__menu-content">
                    <div className="header__logo">
                        <Link to='/'><img src={data.logo.img} alt={data.logo.alt} /></Link>
                    </div>
                    <nav className="header__links">
                        {data.links.map((value, index) => {
                            if (!value?.dataSection) {
                                return <Link to={value?.href} className="header__link" key={index}>{value.text}</Link>
                            } else {
                                return <Link to={value?.href} data-section={value?.dataSection} className="header__link" onClick={e => moveToBlock(e)} key={index}>{value.text}</Link>
                            }
                        })}
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