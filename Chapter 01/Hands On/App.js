import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hola, Buenos Dias!"
);

const jsxHeading = <h1 id="heading">Hola, Buenos Dias!</h1>;

const message = "esta bein?";

const HeadingComponent = () => {
  return <h1 id="heading">Hola, Buenos Dias!</h1>;
};

const DivComponent = () => {
  return (
    <div id="nested-div">
      {HeadingComponent()}
      <p>Como estas? {message}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<DivComponent />);
