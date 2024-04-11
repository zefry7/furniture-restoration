import React from "react";
import Works from "./Works/Works";

function MasterClassPage(props) {
    const data = props.data;

    return <>
        <Works data={data.work}/>
    </>
}

export default MasterClassPage;