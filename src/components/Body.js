
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredres, setFilteredres] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6141396&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Optional Chanining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search-bar">
                <div className="test">
                    <input type="text" placeholder="Search for restaurants..." value={search}
                        onChange={
                            (e) => setSearch(e.target.value)
                        } />
                    <button className="search-button" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(search.toLowerCase()));
                        setFilteredres(filteredRestaurants);
                    }}>Search</button>
                    <button className="filtered-restaurant" onClick={() => {
                        const filteredListOfRestaurant = listOfRestaurants.filter(res => res.info.avgRating > 4.2)
                        setListOfRestaurants(filteredListOfRestaurant);
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="restaurant-container">
                    {filteredres.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
                </div>
            </div>
        </div>
    );
}

export default Body;