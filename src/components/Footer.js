import React, { useEffect, useState } from "react";
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
import Navi from "./Navi";

const Footer = () => {

 

  return (
    <>
      <Router>
        <footer className="footer">
        <span><span>Thanks</span> for stopping by, see you around!</span>
        </footer>
      </Router>
    </>
  );
};

export default Footer;