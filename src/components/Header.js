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

const Header = () => {
  return (
    <>
      <Router>
        <header>
            <h1>Katarzyna Marek</h1>
        </header>
      </Router>
    </>
  );
};

export default Header;