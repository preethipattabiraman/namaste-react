import { useState } from "react";

export const FunctionalComponent = () => {
    console.log("FunctionalComponent - init");
    const [count, setCount] = useState(0);

    return (
        <>
            {console.log("FunctionalComponent - render")}
            <h1>FunctionalComponent</h1>
            <h2>You clicked {count} times</h2>
            <button onClick={() => {setCount(count + 1)}}>Click Me!</button>
        </>
    );
}