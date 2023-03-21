import React from "react"
import { ReactDOM } from "react"
import logo from "./img/homeIcon.png"

const Header = function Header() {
    return (
        <header>
            <nav className = "nav">
                <img src = {logo} className = "nav-img" />
                <ul className = "nav-items">
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

