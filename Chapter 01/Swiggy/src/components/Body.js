import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

export default Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/swiggy");

      if (!response.ok) throw new Error("API error");
      const json = await response.json();

      setRestaurantData(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Trouble fetching the restaurants data.");
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantData = restaurantData.filter(
              (restaurant) => restaurant.info.avgRating > 4.0
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
