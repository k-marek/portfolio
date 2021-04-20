import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link as LinkScroll,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Banner = () => {
  return (
    <>
      <Router>
        <section className="banner-container">
            <div className="pic"></div>   
        </section>
      </Router>
    </>
  );
};

export default Banner;