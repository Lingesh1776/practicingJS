// we create nested elements by passing in the third argument of createElement
// we give array of children as well
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{},
    React.createElement("div",{},
        React.createElement("h1",{},"kick start react")));

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);