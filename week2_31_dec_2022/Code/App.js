import React from "react";
import ReactDOM from "react-dom/client";
import image from "./images/Thomas.jpg";

const h1 = React.createElement("h1", {
    id: "header1",
    className : "header1"
}, "Namaste, everyone from ReactJS!");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(h1);

//Let's try a loop
const listItems = [
"Java","C++","PHP","JavaScript"
];
const li = React.createElement("li", {
    id : "listItem",
    className : "listItem"
}, "List Item");
const ul = React.createElement("ul", {
    id : "list",
    className : "list"
}, listItems.map((item, i) => 
    React.createElement("li", {key : i}, item)
));
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(ul);

const obj = {
    name : "Thomas",
    features : "Clever"
}

const img = React.createElement("img", {
    src : image
}, null);
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(img);

const trainHeader = React.createElement("h1", {
    id: "trainHeader",
    className : "trainHeader"
}, obj.name + ", the " + obj.features + " train set");
// const root4 = ReactDOM.createRoot(document.getElementById("root4"));
// root4.render(trainHeader);
