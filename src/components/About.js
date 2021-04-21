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
import Navi from "./Navi";

const About = () => {
  return (
    <>
      <Router>
     
        <section className="banner">    
          <div className="banner-background"></div>  
          <div className="pic"></div>   
          <div className="about">
            <div className="about-container">
              <h2>Hello,</h2>
              <h2>I'm <span><span>K</span>asia</span></h2>
              <p>Junior Front-end Developer</p>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
};

export default About;