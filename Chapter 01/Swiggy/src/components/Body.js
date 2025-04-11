import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export default Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/swiggy/restaurant"
      );

      if (!response.ok) throw new Error("API error");
      const json = await response.json();

      setRestaurantData(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurantData(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error + " Trouble fetching the restaurants data.");
    }
  };

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="options">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchedRestaurants = restaurantData.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurantData(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRestaurantData = restaurantData.filter(
                (restaurant) => restaurant.info.avgRating > 4.0
              );
              setFilteredRestaurantData(filteredRestaurantData);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurantData.map((restaurant) => {
          return (
            <Link to={`/restaurant/${restaurant.info.id}`}>
              <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
