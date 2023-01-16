import React, {useEffect, useState} from "react";
import restaurantList from "../src/RestaurantInfo.json";
import Restaurant from "./Restaurant";
import APP_CONFIG from "../src/config.json";

console.log(APP_CONFIG);
const restaurantArray = restaurantList.sections.SECTION_SEARCH_RESULT;

const filterRestaurantData = (search, restaurant) => {
    return restaurant.filter((r) => {
        return r.info?.name.toLowerCase().includes(search.toLowerCase());
    });
}

async function getRestaurants() {
    const response = await fetch(APP_CONFIG.url, {
        method: 'GET',
        mode: 'cors'
      });
    const data = await response.json();
    console.log(data);
    return data;
}

export default function Body() {
    const [search, setSearch] = useState('');
    const [restaurant, setRestaurant] = useState(restaurantArray);

    useEffect( () => {
        getRestaurants();
    }, []);

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