import React from "react";
import styles from "./index.css";
import userIcon from "./images/undraw_male_avatar_g98d.svg";
import logo from "./images/undraw_react_re_g3ui.svg";

const Logo = (
    <img className="nrlib-img-logo" src= {logo}/>
);

const SearchBar = (
    <input className="nrlib-search" type="text" id="search"/>
);

const UserIcon = (
    <img className="nrlib-user-icon" src= {userIcon}/>
);

export default function Header() {
    return (
        <nav className="nrlib-nav nrlib-header">
            {Logo}
            {SearchBar}
            {UserIcon}
        </nav>
    );
}