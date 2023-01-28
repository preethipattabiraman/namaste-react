import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import About from "../components/About";
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import Error from "../components/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return ( 
        <>
        <Header/>
        <Body/>
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : <Error/>
    },
    {
        path : "/about",
        element : <About/>
    }
])

root.render(<RouterProvider router={appRouter}/>);