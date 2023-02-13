import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";

const ToDo = (props) => {
    return (
        <div style={{
            border: "2px solid black",
            borderRadius: 15,
            width: "30vw",
            margin: "10px auto",
            display: "flex",
            alignItems: "center"
        }}>
            <IoCheckboxOutline size={30} style={{ "margin": "0px 10px" }}/>
            <h2>{props.text}</h2>
        </div>
    );
}

export default ToDo;
