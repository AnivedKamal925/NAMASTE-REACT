import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useFetchListOfRes = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredres, setFilteredres] = useState([]);



    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(RES_API);
        const json = await data.json();
        console.log(json);
        //Optional Chanining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    return {
        listOfRestaurants,
        filteredres,
        setListOfRestaurants,
        setFilteredres,
    };
}

export default useFetchListOfRes;