import React from "react";

function MyButton(props) {

    return <>
        <button className={props.class} data-text={props.text}></button>
    </>
}

export default MyButton;