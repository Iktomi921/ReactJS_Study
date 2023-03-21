 import Header from "./Header.js"
import ReactDOM from "react-dom"
import React from "react"
import './style.css'

function Footer() {
    return (
        <footer>This is a footer</footer>
    )
}

function MainContent(params) {
    return (
        <div>
            <h1>SomeThings</h1>
            <ol>
                <li>A</li>
                <li>B</li>
            </ol>
        </div>
    )
}


function PageContent() {
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}


ReactDOM.render(<PageContent />, document.getElementById("root"))