import React from "react";
import img from "../../Images/about.gif";
import home from "../../Images/home.png";
import {Link} from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div>
      <div className="main-image home" id="home" style={{ backgroundImage: `url(${home})` }}>
          <button><Link to="/form">JOIN US</Link></button>
        </div>
      
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>LEARN, </span> Build & innovate{" "}
        </h1>

        <div className="row">
          <div className="image">
            <img src={img} />
          </div>

          <div className="content">
            <h3>About Us</h3>
            <p>
              “Everybody should learn to program a computer because it teaches
              you how to think” -Steve Jobs
            </p>
            <p>
              <b>What does this so-called name mean?</b> <br /> There isn't much meaning to it
              other than being a club founded in 2022
            </p>
            <p>
              <b>What is the big idea behind this club's need?</b> <br /> We've discovered
              that there are very few coding and development-related activities
              at this college after spending quite a good chunk of time here.
              Additionally, there is a severe lack of proper interaction between
              senior and junior students. There is no environment here that
              promotes activities it should ideally be a part of an everyday
              schedule of Computer Science students. As a result, we feel it is
              important to provide an environment where the students can
              collaborate to learn, develop, and come up with new ideas.
            </p>
          </div>
        </div>
      </section>
      <section className="review" id="review">
        <div className="box-container">
          <div className="box">
            <h3> Together, we will learn.</h3>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Learn new tech in a short
              period of time
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Provide one another with
              topic resources
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Meetings and sessions on a
              weekly basis
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Try to clear each other's
              doubts
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> The purchased task must be
              completed on time
            </p>
          </div>

          <div className="box">
            <h3>Together, we will build</h3>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Let's put what we've learned
              into practice
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Make a small, fancy project
              based on what we've learned so far.
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Solve some good DSA problems
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Stuck! Wait a minute! Talk to
              your teammates
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Be on time with your tasks
            </p>
          </div>

          <div className="box">
            <h3>Together, we will innovate.</h3>
            <p className="text">
              <i className="fas fa-chevron-right"></i> It's time to create something
              big or innovative
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Build real-life projects as
              per market needs
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Solve some complex problems
              with online judges, eg. leetcode , interview bit, CodeChef.
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Participate in hackathons and
              coding contests
            </p>
            <p className="text">
              <i className="fas fa-chevron-right"></i> Organizing a college level
              tech-fest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
