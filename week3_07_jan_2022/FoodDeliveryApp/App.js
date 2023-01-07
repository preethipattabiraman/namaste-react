import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App() {
    return ( 
        <>
        <Header/>
        <Body/>
        </>
    );
}

root.render(<App/>);