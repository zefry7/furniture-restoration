import React from 'react'
import Intro from './Intro/Intro';
import Firm from './Firm/Firm';
import Family from './Family/Family';
import Services from "./Services/Services"
import Assurance from './Assurance/Assurance';

function MainPage() {
    document.title = "Столярная мастерская NIKASON BRAND"

    return (
        <>
            <Intro/>
            <Firm />
            <Family/>
            <Services/>
            <Assurance/>
        </>
    );
}

export default MainPage;