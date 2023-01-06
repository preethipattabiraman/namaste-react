import React from "react";
import Logo from "./Logo";

function Header() {
    return (
        <nav id="header" className="clib-nav clib-container">
            <Logo/>
            <ul className="clib-list-non-bullet clib-list-inline">
                <li>
                    <a className="clib-nav-link clib-nav-link-active" href = "#">Home</a>
                </li>
                <li>
                    <a className="clib-nav-link" href = "#">Projects</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;