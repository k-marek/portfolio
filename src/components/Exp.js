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

const Exp = () => {
  return (
    <>
      <Router>
        <section className="exp">
          <div className="exp-container">
            <h1>Experience</h1>
            <div className="exp-boxes">
              <div className="exp-box">
                <h1>Lorem Ipsum</h1>
                <h2>January 2020 - January 2021</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a orci tincidunt, tincidunt lectus vitae, facilisis urna. Suspendisse ultricies eu lacus aliquam placerat. Donec pharetra ultricies lacus, condimentum tempus orci imperdiet at. Proin eget felis a eros dictum tempor. Vivamus lobortis massa non turpis varius, nec viverra nibh dignissim. Sed in ante ac leo aliquam cursus quis in justo.</p>
              </div>
              <div className="exp-img"></div>
            </div>
            <div className="exp-boxes">
              <div className="exp-box-container">
                <div className="exp-box">
                  <h1>Lorem Ipsum</h1>
                  <h2>January 2020 - January 2021</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a orci tincidunt, tincidunt lectus vitae, facilisis urna. Suspendisse ultricies eu lacus aliquam placerat. Donec pharetra ultricies lacus, condimentum tempus orci imperdiet at. Proin eget felis a eros dictum tempor. Vivamus lobortis massa non turpis varius, nec viverra nibh dignissim. Sed in ante ac leo aliquam cursus quis in justo.</p>
                </div>
              </div>
            </div>
          </div>   
        </section>
      </Router>
    </>
  );
};

export default Exp;