import React from "react";
import ReactDOM from "react-dom";
import Navi from "./Navi";
import Banner from "./Banner";
import About from "./About";
import Exp from "./Exp";




const Home = () => {
  return (
    <>
      <Navi />
      <Banner />      
      <About />
      <Exp />
    </>
  );
};

export default Home;