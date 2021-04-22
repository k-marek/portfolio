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
                <h1>Coders Lab</h1>
                <h2>Jan 2020 - Sep 2020</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a orci tincidunt, tincidunt lectus vitae, facilisis urna. Suspendisse ultricies eu lacus aliquam placerat. Donec pharetra ultricies lacus, condimentum tempus orci imperdiet at.</p>
              </div>
              <div className="exp-box">
                <h1>Domiko</h1>
                <h2>Jan 2019 - Dec 2020</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a orci tincidunt, tincidunt lectus vitae, facilisis urna. Suspendisse ultricies eu lacus aliquam placerat. Donec pharetra ultricies lacus, condimentum tempus orci imperdiet at.</p>
              </div>
              <div className="exp-box">
                <h1>UPV</h1>
                <h2>Sep 2017 - Jan 2018</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a orci tincidunt, tincidunt lectus vitae, facilisis urna. Suspendisse ultricies eu lacus aliquam placerat. Donec pharetra ultricies lacus, condimentum tempus orci imperdiet at.</p>
              </div>
              <div className="exp-box">
                <h1>SUT</h1>
                <h2>Oct 2012 - May 2018</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a orci tincidunt, tincidunt lectus vitae, facilisis urna. Suspendisse ultricies eu lacus aliquam placerat. Donec pharetra ultricies lacus, condimentum tempus orci imperdiet at.</p>
              </div>
            </div>
          </div>   
        </section>
      </Router>
    </>
  );
};

export default Exp;