const h1 = React.createElement("h1", {
    id: "header1",
    className : "header1"
}, "Namaste, everyone from ReactJS!");
console.log(h1);
console.log(document.getElementById("root2"));
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

