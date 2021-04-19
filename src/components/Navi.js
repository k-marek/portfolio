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

const Navi = () => {
  return (
    <>
      <Router>
          <section className="menu">
            <div className="navi-container">
                <nav>
                    <ul>
                        <LinkScroll to="home" smooth={true}>
                            Home
                        </LinkScroll>
                        <LinkScroll to="about" smooth={true}>
                            About
                        </LinkScroll>
                        <LinkScroll to="exp" smooth={true}>
                            Experience
                        </LinkScroll>
                        <LinkScroll to="contact" smooth={true}>
                            Contact
                        </LinkScroll>
                    </ul>
                </nav>
            </div>
          </section>
          
      </Router>
    </>
  );
};

export default Navi;