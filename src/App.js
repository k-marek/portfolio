import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link as LinkS,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import Home from "./components/Home"


function App() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;