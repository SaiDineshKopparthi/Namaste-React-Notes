import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Body from "./components/Body";

import bhimavaramResData from "./bhimavaramRestaurants.json";

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body resList={bhimavaramResData}/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
