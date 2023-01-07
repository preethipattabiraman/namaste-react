import React from "react";
import logo from "./images/undraw_breakfast_psiw.svg";
import cart from "./images/undraw_shopping_app_flsj.svg";
import styles from "./index.css";

console.log({logo});

const fdLogo = (
    <a href = "#">
        <img className = "nr-fdd-logo" src = {logo} alt = "Food Delivery App"/>
    </a>
)

const navBar = (
    <ul className = "nr-fdd-navbar-list">
        <li><a className = "nr-fdd-link nr-fdd-link-active" href = "#">Home</a></li>
        <li><a className = "nr-fdd-link" href = "#">About Us</a></li>
        <li><a className = "nr-fdd-link" href = "#">Contact</a></li>
    </ul>
)

const fdCart = (
    <a href = "#">
        <img className = "nr-fdd-cart" src = {cart} alt = "My cart"/>
    </a>
)

export default function Header() {
    return (
        <div className="nr-fdd-header">
            {fdLogo}
            {navBar}
            {fdCart}
        </div>
    );
}