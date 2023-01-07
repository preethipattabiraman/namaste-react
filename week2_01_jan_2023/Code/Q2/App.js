import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Header";

export default function App() {
    return (
        <div>
            <Header/>
            {/* <Content/>
            <Footer/> */}
        </div>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);