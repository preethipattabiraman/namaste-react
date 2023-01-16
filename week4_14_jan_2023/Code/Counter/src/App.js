import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked the button ${count} times.`
    });
    
    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click me!</button>
        </>
    )
}

root.render(<Counter></Counter>);