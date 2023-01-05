import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';
import moment from "moment/moment";

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<Footer/>);

function Footer() {
    return (
        <div id = "footerContent">
            <p id = "footer">Author : Preethi Pattabiraman</p>
        </div>
    );
}

export default Footer;