import React from "react";
import textData from "./textData";
import Joke from "./Joke";

export default function App() {
const jokeElements = textData.map(text => {
    return <Joke title = {text.title} content = {text.content} />
}
     
)

    return (
        <div className="container">
            {jokeElements}
        </div>
    )
}