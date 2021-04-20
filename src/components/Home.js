import React from "react";
import ReactDOM from "react-dom";
import Navi from "./Navi";
import Header from "./Header";
import About from "./About";
import Banner from "./Banner";
import Exp from "./Exp";


const Home = () => {
  return (
    <>
      <Navi />
      <Header />
      <Banner />
      <About />
      <Exp />
    </>
  );
};

export default Home;