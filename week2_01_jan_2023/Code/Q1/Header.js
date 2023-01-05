import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';
import moment from "moment/moment";

const header = ReactDOM.createRoot(document.getElementById("header"));
header.render(<Header/>);

export default function Header() { return (
    <div id = "headingContent">
        <p id = "title">Namaste React | Chapter 3 | Assignment 1</p>
        <p id = "time">Time : {moment().format('DD-MMM-YYYY HH:mm:ss')}</p>
    </div>
    )
};