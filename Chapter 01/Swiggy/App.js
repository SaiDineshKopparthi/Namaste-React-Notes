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

  return (
    <div className="res-card" style={resCardBackground}>
      <img
        src="https://yummyindiankitchen.com/wp-content/uploads/2021/05/chicken-dum-biryani-hyderabadi-style.jpg"
        alt=""
      />
      <h3>{resData.resName}</h3>
      <h4> {resData.cuisine}</h4>
      <h4>4.9</h4>
      <h4>15 min</h4>
    </div>
  );
};

const resData = {
  resName: "Kasif Dum Biryani",
  cuisine: "Andhra",
};

const Body = () => {
  console.log(bhimavaramResData.restaurants[0]);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resData} />
        {/* <RestaurantCard resName="Aanand Adiyar Bhavan" cuisine="South Indian" />
        <RestaurantCard resName="Dhaba" cuisine="Punjabi" />
        <RestaurantCard resName="Mc Donald's" cuisine="American" />
        <RestaurantCard resName="Dominos" cuisine="Italian" /> */}
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
