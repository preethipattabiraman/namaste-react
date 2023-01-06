import React from "react";
import logo from './images/undraw_enter_uhqk.svg';

export default function Logo() {
    return (
        <a className = "clib-nav-logo" href="#">
            <img id = "logo" src = {logo} width="60" height="60"/> 
        </a>
    )
}