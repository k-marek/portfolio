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
import Home from "./Home"
import About from "./About";
import Exp from "./Exp";

const Navi = () => {
  return (
    <>
      <Router>
          <section className="menu">
            <div className="navi-container">
                <nav>
                <NavLink exact to="/">K<span>M</span></NavLink>
                  <ul>
                    <NavLink  to="/about">a<span>b</span>out</NavLink>
                    <NavLink to="/experience">e<span>x</span>perience</NavLink>
                    <NavLink  to="/portfolio">p<span>o</span>rtfolio</NavLink>
                    <NavLink  to="/contact">c<span>o</span>ntact</NavLink>
                    <Switch>
                      <Route  path="/about">
                        <About />
                      </Route>
                      <Route  path="/experience">
                        <Exp />
                      </Route>
                    </Switch>
                  </ul>                    
                </nav>
            </div>
          </section>
          
      </Router>
    </>
  );
};

export default Navi;



