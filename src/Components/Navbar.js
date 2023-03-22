import React from "react";
import reactIcon from "../img/react_icon.png"

export default function Navbar(params) {
    return (
        <nav className="navbar">
            <img src = {reactIcon} className ="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React course</h4>
        </nav>
    )
    
}