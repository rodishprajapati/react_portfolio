import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./MainContent/Content/Content";
import Nav from "./Header/NavBar";
import Contact from "./MainContent/Contact/contactContainer";
import Footer from "./MainContent/Footer/footer";
import Work from "./MainContent/Work/work";

//import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Content />
    <Work />
    <Contact />
    <Footer />
  </React.StrictMode>
);
