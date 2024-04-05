import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from 'react-router-dom';


function Layout(props) {
    return (
        <>
            <Header data={props.data.header}/>
            <Outlet />
            <Footer data={props.data.footer}/>
        </>
    )
}

export default Layout;