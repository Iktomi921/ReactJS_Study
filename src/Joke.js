import React from "react";

export default function Joke(props) {
    return (
        <div>
            <h3>Title: {props.title}</h3>
            <p>Content: {props.content}</p>
            <hr />
        </div>
    )
}