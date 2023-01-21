export default function Shimmer(restaurantData) {
    return (
        <div className = "nr-fdd-shimmer-card-list">
            {
            Array(10).fill("").map((e, i) => (
                <div key = {i} className = "nr-fdd-shimmer-card">
                    <img className = "nr-fdd-shimmer-restaurant-image"/>
                    <p className = "nr-fdd-shimmer-restaurant-name"></p>
                    <p className = "nr-fdd-shimmer-restaurant-cuisine"></p>
                    <div className = "nr-fdd-shimmer"></div>
                    </div> 
                ))}                
        </div>       
    );
}