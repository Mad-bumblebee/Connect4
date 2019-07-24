import React from "react";
import ReactDOM from "react-dom";
import Assembly from "./assembly";

const div = document.createElement("div");

window.onload = function()
{
    document.body.appendChild(div);    
    ReactDOM.render(<Assembly/>, div);
}