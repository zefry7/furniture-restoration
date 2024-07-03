import React, { useCallback, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../..";

function Header() {
    const data = useContext(UserContext).header

    const burgerMenu = () => {
        const sizeWindow = window.innerWidth;
        let timeStyle = 0
        if (sizeWindow <= 768) {
            const menuContent = document.querySelector(".header__menu-content")
            const blockContent = document.querySelector(".header__content")
            menuContent.classList.toggle("header__menu-burger_active")
            document.body.classList.toggle("scroll-lock")
            blockContent.classList.toggle("header__black-bg")
            if (menuContent.classList.contains("header__menu-burger_visible")) timeStyle = 200

            setTimeout(() => {
                menuContent.classList.toggle("header__menu-burger_visible")
                blockContent.classList.toggle("header__content_background")
            }, timeStyle)
        }
    }

    useEffect(() => {
        const root = document.getElementById("root")
        window.addEventListener("resize", () => {
            const sizeWindow = window.innerWidth;
            if (sizeWindow > 768) {
                const menuContent = document.querySelector(".header__menu-content")
                const blockContent = document.querySelector(".header__content")
                menuContent.classList.remove("header__menu-burger_active")
                blockContent.classList.remove("header__black-bg")
                document.body.classList.remove("scroll-lock")
            }
        })
        document.addEventListener("click", (e) => {
            const sizeWindow = window.innerWidth;
            if (sizeWindow <= 768) {
                if (e.target.classList.contains("header__content_background")) {
                    burgerMenu()
                }
            }
        })
    }, [])

    const tabIndexToggle = useCallback((str) => {
        const list = document.getElementsByClassName("tab-index")

        for (let elem of list) {
            elem.setAttribute("tabIndex", str)
        }
    }, [])


    const moveToBlock = (e) => {
        e.preventDefault()
        var attr = e.target.getAttribute("data-section");
        burgerMenu()
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
                        <Link to='/' onClick={burgerMenu} tabIndex={0}><img src={data?.logo?.src} alt={data?.logo?.alt} /></Link>
                    </div>
                    <nav className="header__links">
                        {data?.links.map((value, index) => {
                            if (!value?.dataSection) {
                                return <Link to={value?.href} className="header__link" onClick={burgerMenu} key={index}>{value?.text}</Link>
                            } else {
                                return <Link to={value?.href} data-section={value?.dataSection} className="header__link" onClick={e => moveToBlock(e)} key={index}>{value?.text}</Link>
                            }
                        })}
                    </nav>
                    <button className="header__menu-close" onClick={() => { burgerMenu(); tabIndexToggle("0") }}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <button className="header__menu-burger tab-index" onClick={() => { burgerMenu(); tabIndexToggle("-1") }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header;