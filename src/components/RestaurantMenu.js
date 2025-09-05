
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchResMenu from "../utils/useFetchResMenu"



const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useFetchResMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    return (
        <div className="RestaurantInfo">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h4>Menu</h4>
            <ul>
                {itemCards.map((listmenu) =>
                    <li key={listmenu.card.info.id}>
                        {listmenu.card.info.name} - {"Rs. "}{listmenu.card.info.defaultPrice / 100 || listmenu.card.info.price / 100}
                    </li>)}
            </ul>
        </div>
    )
};

export default RestaurantMenu;