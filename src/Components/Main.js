import React from "react";
import grid from "../img/grid.png"

export default function Main(params) {
    return (
        <section className="section--grid">
            <img src = {grid} className ="main--photo" />
            <h1 className="main--title">Online Experiences</h1>
            <p className="main--text">Join our teams with unique activities</p>
        </section>
    )
    
}