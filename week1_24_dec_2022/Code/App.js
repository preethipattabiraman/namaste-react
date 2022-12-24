const h1 = React.createElement("h1", {
    id: "header1",
    className : "header1"
}, "Namaste, everyone from ReactJS!");
console.log(h1);
console.log(document.getElementById("root2"));
const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(h1);