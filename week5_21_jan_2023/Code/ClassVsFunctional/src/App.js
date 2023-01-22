import ReactDOM from "react-dom/client";
import ClassComponent from "../components/ClassComponent";
import { FunctionalComponent } from "../components/FunctionalComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
    return (
    <>
        <ClassComponent/>
        <FunctionalComponent/>
    </>
    );
}

root.render(<App/>);