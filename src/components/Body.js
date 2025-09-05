
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchListOfRes from "../utils/useFetchListOfRes";
import useIsStatusOnline from "../utils/useIsStatusOnline";


const Body = () => {

    const {
        listOfRestaurants,
        filteredres,
        setListOfRestaurants,
        setFilteredres,
    } = useFetchListOfRes();

    const [search, setSearch] = useState("");

    const onlineStatus = useIsStatusOnline();

    if (onlineStatus === false)
        return <h1>Please check your Internet Connectivity</h1>


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
                    {filteredres.map((restaurant) => (
                        <Link className="card-link" key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>))}
                </div>
            </div>
        </div>
    );
}

export default Body;