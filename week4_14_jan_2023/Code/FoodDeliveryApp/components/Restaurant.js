import APP_CONFIG from "../src/config.json";

export default function Restaurant(restaurantData) {
    return (
        <div className = "nr-fdd-card">
            <img className = "nr-fdd-restaurant-image" src= {APP_CONFIG.image_url + restaurantData?.data?.cloudinaryImageId}/>
            <p className = "nr-fdd-restaurant-name">{restaurantData?.data?.name}</p>
            <p className = "nr-fdd-restaurant-cuisine">{restaurantData?.data?.cuisines.join(", ")}</p>
        </div>
    )
}