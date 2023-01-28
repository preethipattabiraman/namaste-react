import Header from "./Header";
import error from "../images/undraw_page_not_found_re_e9o6.svg";
import styles from "../index.css";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    if(err.status === 404) {
        return (
            <>
            <Header/>
            <div id="nr-fdd-error">
                <img className="nr-fdd-error-image" src={error}/>
            </div>
            </>
        );
    }
}

export default Error;