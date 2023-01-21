import React, {useEffect, useState} from "react";
import Restaurant from "./Restaurant";
import APP_CONFIG from "../src/config.json";
import Shimmer from "./Shimmer";

console.log(APP_CONFIG);

const filterRestaurantData = (search, restaurant) => {
    return restaurant.filter((r) => {
        return r.data?.name.toLowerCase().includes(search.toLowerCase());
    });
}

export default function Body() {
    const [search, setSearch] = useState('');
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    async function getRestaurants() {
        const response = await fetch(APP_CONFIG.url);
        const data = await response.json();
        console.log(data);
        setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
        setSearchResults(data?.data?.cards[2]?.data?.data?.cards);
    }

    useEffect( () => {
        getRestaurants();
    }, []);

    //Early returns
    if(!allRestaurants) return null;

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
                        if(search.length != 0)             
                            setSearchResults(filterRestaurantData(search, allRestaurants));
                        else 
                            setSearchResults(allRestaurants);
                        }
                    }>
                    Search
                </button>
                <p>You searched for {search}</p>
            </div>
            <div className = "nr-fdd-card-list">
                {
                searchResults.map((r) => {
                    return (
                        <Restaurant {...r} key = {r?.data?.id} />
                    );
                })}
            </div>
        </div>
    )
}

