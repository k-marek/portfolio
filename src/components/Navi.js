import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
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
                <Link to="/" className="navi-logo">K<span>M</span></Link>
                  <ul>
                    <Link to="/about">a<span>b</span>out</Link>
                    <NavLink  to="/experience">e<span>x</span>perience</NavLink>
                    <NavLink  to="/portfolio">p<span>o</span>rtfolio</NavLink>
                    <NavLink  to="/contact">c<span>o</span>ntact</NavLink>
                    </ul>                    
                </nav>
                    
            </div>
          </section>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/experience">
                <Exp />
              </Route>
              <Route  path="/">
                <Banner />
              </Route>
            </Switch>
      </Router>
    </>
  );
};

export default Navi;

