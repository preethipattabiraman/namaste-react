import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/undraw_breakfast_psiw.svg";
import styles from "../index.css";

const fdLogo = (
    <Link to="/" className = "nr-fdd-logo-parent">
        <img className = "nr-fdd-logo" src = {logo} alt = "Food Delivery App"/>
    </Link>
)

const title = (
    <p className="nr-fdd-title">Food Delivery App</p>
)

const navBar = (
    <ul className = "nr-fdd-navbar-list">
        <li><Link to="/" className = "nr-fdd-link nr-fdd-link-active">Home</Link></li>
        <li><Link to="/about" className = "nr-fdd-link">About Us</Link></li>
        <li><Link to="/contact" className = "nr-fdd-link">Contact</Link></li>
        <li><a className = "nr-fdd-link">Cart</a></li>
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