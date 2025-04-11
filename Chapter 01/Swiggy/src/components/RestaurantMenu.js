import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

export default RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/swiggy/restaurant/" + resId
      );

      if (!response.ok) throw new Error("API error");

      const json = await response.json();
      setResInfo(json.data);
      setMenuItems(
        json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
          .itemCards
      );
    } catch (err) {
      console.error(err + " Trouble fetching the restaurants Menu.");
    }
  };

  let name, cuisines, costForTwoMessage;

  if (resInfo?.cards?.[2]?.card?.card?.info) {
    ({ name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info);
  }

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {menuItems.map((item) => {
          const { name, id, price } = item?.card?.info;
          return (
            <li key={id}>
              {name} - ${price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
