import React from "react";
import Works from "./Works/Works";
import Techniques from "./Techniques/Techniques";
import Types from "./Types/Types";

function MasterClassPage(props) {
    const data = props.data;

    return <>
        <Works data={data.work}/>
        {/* <Techniques data={data.techniques} /> */}
        <Types data={data.types} />
    </>
}

export default MasterClassPage;