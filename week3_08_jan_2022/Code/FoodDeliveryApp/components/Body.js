import React, {useState} from "react";
import { useState } from "react";
import restaurantList from "../src/RestaurantInfo.json";
import Restaurant from "./Restaurant";

const restaurantArray = restaurantList.sections.SECTION_SEARCH_RESULT;

const filterRestaurantData = (search, restaurant) => {
    return restaurant.filter((r) => {
        return r.info?.name.toLowerCase().includes(search.toLowerCase());
    });
}

export default function Body() {
    const [search, setSearch] = useState('');
    const [restaurant, setRestaurant] = useState(restaurantArray);

    return (
        <div className = "nr-fdd-body">
            <div className="nr-fdd-search">
                <input 
                    className="nr-fdd-search-text" 
                    onChange={(e) => setSearch(e.target.value)} 
                    value = {search} 
                    type="text"/>
                <button className="nr-fdd-search-btn" onClick={
                    () => {
                        setRestaurant(restaurantArray);   
                        if(search.length != 0)             
                            setRestaurant(filterRestaurantData(search, restaurant));
                    }
                }>
                    Search
                </button>
                <p>You searched for {search}</p>
            </div>
            <div className = "nr-fdd-card-list">
                {
                restaurant.map((r) => {
                    return (
                        <Restaurant {...r} key = {r.info?.resId} />
                    );
                })}
            </div>
        </div>
    )
}