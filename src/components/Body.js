import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Search for restaurants..." />
                <button className="search-button">Search</button>
            <div className="restaurant-container">
                {resList.map((restaurant)=> <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>)}
            </div>
            </div>
            </div>
    );
}

export default Body;