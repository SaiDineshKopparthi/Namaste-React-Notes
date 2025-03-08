import RestaurantCard from "./RestaurantCard";

export default Body = ({ resList }) => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.restaurants.map((restaurant) => {
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
