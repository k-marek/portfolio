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

const About = () => {
  return (
    <>
      <Router>
        <section className="about">
            <div className="about-container">
                <h2>Hi! I'm Kasia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a orci tincidunt, tincidunt lectus vitae, facilisis urna. Suspendisse ultricies eu lacus aliquam placerat. Donec pharetra ultricies lacus, condimentum tempus orci imperdiet at. Proin eget felis a eros dictum tempor. Vivamus lobortis massa non turpis varius, nec viverra nibh dignissim. Sed in ante ac leo aliquam cursus quis in justo. Pellentesque sodales lacus mi. Morbi ac mauris sem. Etiam odio leo, gravida et velit in, fermentum blandit sem. Maecenas ultricies nisi sed ipsum dictum rutrum. Nullam non tortor rhoncus, vulputate neque eget, pellentesque ex. Duis sapien risus, varius nec nisi a, porttitor gravida sem. Aliquam porta dui id ipsum rhoncus malesuada. Curabitur varius urna non purus bibendum, a malesuada nulla ornare.</p>
            </div>
        </section>
      </Router>
    </>
  );
};

export default About;