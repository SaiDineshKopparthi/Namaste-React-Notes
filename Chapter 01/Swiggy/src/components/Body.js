import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

export default Body = ({ resList }) => {
  const [restaurantData, setRestaurantData] = useState(resList.restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantData = restaurantData.filter(
              (restaurant) => restaurant.info.avgRating > 4.1
            );
            setRestaurantData(filteredRestaurantData);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {restaurantData.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};
