
const RestaurantCard = ({resData}) => {
    const {name, cuisines, costForTwo, avgRating } = resData?.info;
    return (
        <div className="restaurant-card">
            <img className="restaurant-img" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+ resData?.info?.cloudinaryImageId} calt="Restaurant" />
            <h3>{name}</h3>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} ⭐</h5>
        </div>
    );
}

export default RestaurantCard;