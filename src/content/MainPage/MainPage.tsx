import React from 'react'
import Intro from './Intro/Intro';

function MainPage(props) {
    const data = props.data
    return (
        <>
            <Intro data={data.intro}/>
        </>
    );
}

export default MainPage;