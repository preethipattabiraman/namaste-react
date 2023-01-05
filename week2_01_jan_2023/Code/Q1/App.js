import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';
import Header from "./Header";
import Footer from "./Footer";

//Using createElement to create a nested DIV
const h1 = React.createElement("h1", {
    className : "heading1",
    key : "heading1",
    id : "heading1"
}, "This is heading1");
const h2 = React.createElement("h2", {
    className : "heading2",
    key : "heading2",
    id : "heading2"
}, "This is heading2");
const h3 = React.createElement("h3", {
    className : "heading3",
    key : "heading3",
    id : "heading3"
}, "This is heading3");

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render([h1, h2, h3]);

//Using JSX
const jsxH1 = (
    <h1>I am an h1 element from JSX.</h1>
);
const jsxH2 = (
    <h2>I am an h2 element from JSX.</h2>
);
const jsxH3 = (
    <h3>I am an h3 element from JSX.</h3>
);

const jsxB = (
    <b>I am a bold element from JSX.</b>
)
const Paragraph = () => {
    return (
        <div>
            {jsxH1}
            {jsxH2}
            {jsxH3}
            {jsxB}
        </div>
    );
};

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(Paragraph());

const pageHeader = ReactDOM.createRoot(document.getElementById("header"));
pageHeader.render(<Header/>);

const pageFooter = ReactDOM.createRoot(document.getElementById("footer"));
pageFooter.render(<Footer/>);