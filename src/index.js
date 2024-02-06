import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./Content";
import Nav from "./NavBar";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Content />
    <Contact />
  </React.StrictMode>
);
