import React from "react";
import Works from "./Works/Works";
import Techniques from "./Techniques/Techniques";
import Types from "./Types/Types";

function MasterClassPage() {
    document.title = "Мастер-классы от NIKASON BRAND"

    return <>
        <Works/>
        <Techniques/>
        <Types />
    </>
}

export default MasterClassPage;