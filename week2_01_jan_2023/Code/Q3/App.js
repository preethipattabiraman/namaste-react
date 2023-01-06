import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Article from "./Article";
import styles from "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
    return (
        <div>
            <Header/>
            <Footer/>
        </div>
        
    );
}

root.render(<App/>);