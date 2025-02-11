import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hola! Buenos Dias."
);

const jsxHeading = <h1 id="heading">Hola! Buenos Dias.</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);