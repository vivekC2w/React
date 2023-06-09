import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Learning React JS 🚀"),
    React.createElement("h2", {}, "React JS is Just Amazing"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

//The above code is lengthy for that we have JSX

console.log(parent); //Object - (react-element)

//CREATE root for react
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
