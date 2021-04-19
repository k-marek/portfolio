import React from "react";
import ReactDOM from "react-dom";
import Navi from "./Navi";
import Header from "./Header";
import About from "./About";


const Home = () => {
  return (
    <>
      <Navi />
      <Header />
      <About />
    </>
  );
};

export default Home;