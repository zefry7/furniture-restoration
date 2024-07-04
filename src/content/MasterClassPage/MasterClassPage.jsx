import React, { useEffect } from "react";
import Works from "./Works/Works";
import Techniques from "./Techniques/Techniques";
import Types from "./Types/Types";
import { showObserver } from "../../styles/script/showObserver";

function MasterClassPage() {
    document.title = "Мастер-классы от NIKASON BRAND"

    useEffect(() => {
        showObserver()
    }, [])

    return <>
        <Works/>
        <Techniques/>
        <Types />
    </>
}

export default MasterClassPage;