import React from "react";
import Works from "./Works/Works";
import Techniques from "./Techniques/Techniques";

function MasterClassPage(props) {
    const data = props.data;

    return <>
        <Works data={data.work}/>
        <Techniques data={data.techniques} />
    </>
}

export default MasterClassPage;