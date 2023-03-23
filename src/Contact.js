import React from "react";
import catImage from "../src/img/cat.jpg"

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src = {catImage} />
            <div className="info">
                <h3>{props.name}</h3>
                <p>(+84) 00282 475 9598</p>
                <p>cat@gmail.com</p>
            </div>
        </div>
    )
}