export default function Shimmer(restaurantData) {
    return (
        <div className = "nr-fdd-shimmer-card">
            <img className = "nr-fdd-shimmer-restaurant-image" src= {restaurantData.info?.image?.url}/>
            <p className = "nr-fdd-shimmer-restaurant-name">{restaurantData.info?.name}</p>
            <p className = "nr-fdd-shimmer-restaurant-cuisine">{restaurantData.distance}</p>
            <div className = "nr-fdd-shimmer"></div>
        </div>
    );
}