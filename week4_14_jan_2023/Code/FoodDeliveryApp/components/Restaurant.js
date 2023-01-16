export default function Restaurant(restaurantData) {
    return (
        <div className = "nr-fdd-card">
            <img className = "nr-fdd-restaurant-image" src= {restaurantData.info?.image?.url}/>
            <p className = "nr-fdd-restaurant-name">{restaurantData.info?.name}</p>
            <p className = "nr-fdd-restaurant-distance">{restaurantData.distance}</p>
            <div className = "nr-fdd-shimmer"></div>
        </div>
    )
}