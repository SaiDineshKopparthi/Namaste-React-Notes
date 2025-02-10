import React from "react";
//import ReactDOM from "react-dom"; Not going to work after React 18
import { createRoot } from 'react-dom/client';

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);
{
  /* <div id="parent">
    <div id="child">
      <h1>Creating nested HTML elements using React</h1>
      <h2>Second element</h2>
    </div>
    <div id="child2">
      <h1>Creating nested HTML elements using React</h1>
      <h2>Second element</h2>
    </div>
  </div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Creating nested HTML elements using React"),
    React.createElement("h2", {}, "Second element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Creating nested HTML elements using React"),
    React.createElement("h2", {}, "Second element"),
  ]),
]);

//const root = ReactDOM.createRoot(document.getElementById("root")); //Old way of rendering - before react 18
const root = createRoot(document.getElementById('root'));
root.render(parent);
