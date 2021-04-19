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
            <div className="header-container">
                <div className="pic"></div>
                <h1>Katarzyna Marek</h1>
            </div>
        </header>
      </Router>
    </>
  );
};

export default Header;