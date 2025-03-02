import React from "react";
import ReactDOM from "react-dom/client";
import bhimavaramResData from "./bhimavaramRestaurants.json";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1200w/canva-yellow-and-brown-kitchen-food-logo-DRT6KFcL0ts.png"
          alt="The logo of the food delivery app"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resCardBackground = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;

  return (
    <div className="res-card" style={resCardBackground}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>Delivery Time: {sla.deliveryTime} min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {bhimavaramResData.restaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
