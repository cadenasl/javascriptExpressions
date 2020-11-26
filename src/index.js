import React from "react";
import ReactDOM from "react-dom";

const num = "7";
const name = "Luiggy";

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>Your lucky number is {Math.random() * 100}</p>
  </div>,
  document.getElementById("root")
);
