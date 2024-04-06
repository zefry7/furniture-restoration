import React from 'react'
import Intro from './Intro/Intro';
import Firm from './Firm/Firm';

function MainPage(props) {
    const data = props.data
    return (
        <>
            <Intro data={data.intro}/>
            {/* <Firm data={data.firm}/> */}
        </>
    );
}

export default MainPage;