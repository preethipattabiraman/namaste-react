export default function Restaurant(restaurantData) {
    return (
        <div className = "nr-fdd-card">
            <img src= {restaurantData.info?.image?.url}/>
            <p className = "nr-fdd-restaurant-name">{restaurantData.info?.name}</p>
            <p>{restaurantData.distance}</p>
        </div>
    )
}