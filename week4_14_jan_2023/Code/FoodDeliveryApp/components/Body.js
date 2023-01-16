import React, {useEffect, useState} from "react";
import Restaurant from "./Restaurant";
import APP_CONFIG from "../src/config.json";
import Shimmer from "./Shimmer";

console.log(APP_CONFIG);

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
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect( () => {
        getRestaurants();
    }, []);

    return allRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className = "nr-fdd-body">
            <div className="nr-fdd-search">
                <input 
                    className="nr-fdd-search-text" 
                    onChange={(e) => setSearch(e.target.value)} 
                    value = {search} 
                    type="text"/>
                <button className="nr-fdd-search-btn" onClick={
                    () => {
                        setAllRestaurants(allRestaurants);   
                        if(search.length != 0)             
                            setAllRestaurants(filterRestaurantData(search, allRestaurants));
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
                        <Restaurant {...r} key = {r?.data?.id} />
                    );
                })}
            </div>
        </div>
    )
}