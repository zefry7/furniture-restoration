import React, { useEffect } from 'react'
import Intro from './Intro/Intro';
import Firm from './Firm/Firm';
import Family from './Family/Family';
import Services from "./Services/Services"
import Assurance from './Assurance/Assurance';
import { showObserver } from '../../styles/script/showObserver';

function MainPage() {
    document.title = "Столярная мастерская NIKASON BRAND"

    useEffect(() => {
        showObserver()
    }, [])
    
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