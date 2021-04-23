import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import {
  Link as LinkScroll,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import About from "./About";
import Banner from "./Banner";
import Exp from "./Exp";


const Navi = () => {
  return (
    <>
      <Router>
          <section className="menu">
            <div className="navi-container">
                <nav>
                <LinkScroll to="banner" smooth={true} className="navi-logo"><p>K</p><p>M</p></LinkScroll>
                  <ul>
                    <LinkScroll to="about" smooth={true}>a<span>b</span>out</LinkScroll>
                    <LinkScroll to="exp" smooth={true}>e<span>x</span>perience</LinkScroll>
                    <LinkScroll to="portfolio" smooth={true}>p<span>o</span>rtfolio</LinkScroll>
                    <LinkScroll to="contact" smooth={true}>c<span>o</span>ntact</LinkScroll>
                    </ul>                    
                </nav>
                    
            </div>
          </section>
      </Router>
    </>
  );
};

export default Navi;

