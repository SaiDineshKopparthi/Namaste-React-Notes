import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header.js";
import Body from "./components/Body";

import bhimavaramResData from "./utils/bhimavaramRestaurants.json";

const AppLayout = () => {
  console.log(<Header />);
  return (
    <div id="app">
      <Header />
      <Body resList={bhimavaramResData}/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
