import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <button value={counter} onClick={() => setCounter(counter + 1)}>Click Me!</button>
            <h1>You have clicked me {counter} times.</h1>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);