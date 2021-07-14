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

const About = () => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Router>
        <section className="about">
          <div className="about-container">
            <div className="about-background"></div>
            <div className="about-headline">
              <h2
                style={{ 
                transform: `translateX(${-offsetY*0.4}px)`
                }} smooth={true}
              >A few words</h2>
            </div>      
            <div className="about-content">
              <p><div className="about-pic"></div>
              <p>My name is Katarzyna Marek, currently living in Gliwice, Poland. My goal is to work as a Javascript Front-end Developer. The adventure with programming begun over a year ago, when I took a curse of Javascript in Coders Lab. It included such technologies as HTML5, CSS, Javascript, RWD, ES6, Sass, Gulp, Github, Webpack, React JS. I found resolving the issues and watching the progress satisfying. I escpecially enjoy using React.</p>
              <p>But let's think back. I've been working as a Civil Engineer for three years. I've been responsible for producing construction drawings through use of CAD software. I've been cooperating with engineers, designers and project managers in the preparation of drawing packages, design concepts, sketches, and calculations. I've been using CAD software and technologies to carry out civil engineering designs and preparing drawings in accordance with project CAD standards, analyzing design issues and determining appropriate solutions. All of that following established design guidelines and procedures. I've been coordinating with team members and other disciplines.
 I've been studying Civil Engineering at the Silesian University of Technology and graduated with a Master's Degree. Meanwhile, I took part in Erasmus Exchange program and moved to Spain for almost half a year. I've been studying at The Polytechnical University of Valencia and performing with international teams. As an ex-civil-engineer I know the meaning of the time preasure.</p>
              <p>After hours, I'm interested in interior architecture and design, I have an good aesthetic feeling. I also do crossfit (ok, that was before the Covid19 situation), jogging and a little bit of yoga. When there's a chance I do windsurfing and I'm a huge ski fan. So I guess I'm a sport person. </p>
              <p>I see myself as an open-minded person, who enjoy to experience new things. I like to be around with people and meet new ones. </p></p>
              <div className="about-img"></div>
          </div>
          </div>
        </section>
      </Router>
    </>
  );
};

export default About;