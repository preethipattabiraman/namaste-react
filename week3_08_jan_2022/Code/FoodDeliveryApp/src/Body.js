import React from "react";
import RestaurantList from "../components/RestaurantList";

export default function Body() {
    return (
        <div className = "nr-fdd-body">
            { <RestaurantList/> }
        </div>
    )
}