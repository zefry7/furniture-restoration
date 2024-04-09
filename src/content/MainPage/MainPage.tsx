import React from 'react'
import Intro from './Intro/Intro';
import Firm from './Firm/Firm';
import Family from './Family/Family';
import Services from "./Services/Services"
import Assurance from './Assurance/Assurance';

function MainPage(props) {
    const data = props.data
    return (
        <>
            <Intro data={data.intro}/>
            <Firm data={data.firm}/>
            <Family data={data.family}/>
            <Services data={data.services}/>
            <Assurance data={data.assurance} />
        </>
    );
}

export default MainPage;