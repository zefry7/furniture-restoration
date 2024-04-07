import React from 'react'
import Intro from './Intro/Intro';
import Firm from './Firm/Firm';
import Family from './Family/Family';
import Services from "./Services/Services"

function MainPage(props) {
    const data = props.data
    return (
        <>
            <Intro data={data.intro}/>
            <Firm data={data.firm}/>
            <Family data={data.family}/>
            <Services data={data.services}/>
        </>
    );
}

export default MainPage;