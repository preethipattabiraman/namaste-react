import React from "react";
import logo from "../images/undraw_breakfast_psiw.svg";
import styles from "../index.css";

const fdLogo = (
    <a className = "nr-fdd-logo-parent" href = "#">
        <img className = "nr-fdd-logo" src = {logo} alt = "Food Delivery App"/>
    </a>
)

const title = (
    <p className="nr-fdd-title">Food Delivery App</p>
)

const navBar = (
    <ul className = "nr-fdd-navbar-list">
        <li><a className = "nr-fdd-link nr-fdd-link-active" href = "#">Home</a></li>
        <li><a className = "nr-fdd-link" href = "#">About Us</a></li>
        <li><a className = "nr-fdd-link" href = "#">Contact</a></li>
        <li><a className = "nr-fdd-link" href = "#">Cart</a></li>
    </ul>
)

export default function Header() {
    return (
        <div className="nr-fdd-header">
            {fdLogo}
            {title}
            {navBar}
        </div>
    );
}