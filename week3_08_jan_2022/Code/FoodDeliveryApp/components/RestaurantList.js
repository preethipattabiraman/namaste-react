import React from "react";
import restaurantList from "../src/RestaurantInfo.json";

const restaurantArray = restaurantList.sections.SECTION_SEARCH_RESULT;
console.log(restaurantArray);

function Restaurant({restaurant}) {
    return (
        <div className = "nr-fdd-card">
            <img src= {restaurant.info?.image?.url}/>
            <p className = "nr-fdd-restaurant-name">{restaurant.info?.name}</p>
            <p>{restaurant.distance}</p>
        </div>
    )
}

const RestaurantListing = restaurantArray.map((restaurant, index) => 
    <Restaurant key = {restaurant.info?.resId} restaurant={restaurant}/>
);

export default function RestaurantList() {
    return (
        <div className = "nr-fdd-card-list">
            {RestaurantListing}
        </div>
    );
}