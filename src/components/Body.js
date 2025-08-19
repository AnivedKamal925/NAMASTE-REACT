import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants ] = useState(resList);

    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Search for restaurants..." />
                <button className="search-button">Search</button>
                <button className="filtered-restaurant" onClick={()=>{const filteredListOfRestaurant = listOfRestaurants.filter(res => res.info.avgRating > 4.2)
                    setListOfRestaurants(filteredListOfRestaurant);
                }}>Top Rated Restaurant</button>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant)=> <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>)}
            </div>
            </div>
            </div>
    );
}

export default Body;