import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//React.createElement => ReactElement(JS Object) => HTML Element(render)
//JSX => Babel transpiles it to React.createElement => ReactElement(JS Object) => HTML Element(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

//JSX - is not HTML inside Javascript - HTML-like or XML-like syntax
const jsxHeading = <h1 className="head">Namaste React Using JSX 🚀</h1>;

// Suppose we want to write JSX tags in multiple lines then you have to wrap it in parenthesis

const jsxHeadingMultLines = (
  <h1 className="head">Namaste React Using JSX 🚀</h1>
);

//HomeWork
// How do I write image tag, image src, anchor tag inside jsx?
// const imagePath = "/path/to/image.jpg";
// <img src="/path/to/image.jpg" alt="Image Description" />;
// const imagePath1 = "/path/to/image.jpg";

// Anchor Tag with Image
{
  /* <a href="https://example.com">
  <img src="/path/to/image.jpg" alt="Image Description" />
  </a> */
}

//create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// render heading tag in root
// root.render(heading);
root.render(jsxHeading);
