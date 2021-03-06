import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Frontend from './Frontend'
import ReactRedux from './ReactRedux'
import PrivateLessons from './PrivateLessons'
import IntroToJava from './IntroToJava'
import Java from './Java'
import Apcs from './Apcs'
import Bootcampkids from './bootcampkids'

import FrontLogo from '.././images/htmlcssjs.svg'
import ReactReduxLogo from '.././images/reactredux.svg'
import JavaRedLogo from '.././images/java-red.svg'
import JavaOrangeLogo from '.././images/java-orange.svg'
import Data from '.././images/database.svg'
import BootcampLogo from '.././images/bootcamp.svg'
import MiniBootcampLogo from '.././images/minibootcamplogo.svg'
import {Route, Switch} from 'react-router-dom'


class Courses extends Component {

  render() {

    const course =  <div>


      <hr style={{marginTop:"2rem", marginBottom:"1rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>

      <Fade>
        <h1 style={{textAlign:"center", paddingTop:"2rem", paddingBottom: "2rem", fontSize:"3rem"}}>
          <strong>Courses</strong>
        </h1>
      </Fade>

      <hr style={{marginTop:"1rem", marginBottom:"2rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>

      {/* Front End */}
      <div style={{background:"#7fc6ff"}}>
        <h3 className="course-title">
          <strong> Web Development </strong>
        </h3>
        <div className="course-top-half no-bot-margin">
          <div className="course-top-left">
            <Fade>
              <img src={FrontLogo} alt="html/css/js" className="courses-image-sizing"/>
            </Fade>
          </div>

          <div className="course-top-right">
            <Slide right>
              <p className="course-paragraph">
                Build your own website! Learn HTML5, CSS3, and JavaScript with
                our Front-End Web Development course.
                We go into everything you would need to know in order to design and build a website
                from the ground up.
              </p>
            </Slide>
          </div>
        </div>

        {/*list hidden until mobile*/}
        <ul className="course-list">
          <li>
            Learn HTML5 and how to properly lay elements onto a page seamlessly
          </li>
          <li>
            Learn CSS3 and stylize your elements to captivate your audience
          </li>
          <li>
            Learn JavaScript and create reactive web pages that puts you on a higher level
          </li>
        </ul>

        <Fade>
          <div className="course-link-div">
            <a href={'/courses/frontend'} className="course-link">
              <button className="btn course-btn btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>


      {/* Intro to Java */}
      <div className="intro-java-gradient">
        <h3 className="course-title" style={{color:"white"}}>
          <strong> Intro to Java </strong>
        </h3>
        <div className="course-top-half">
          <div className="course-top-right">
            <Slide left>
              <p className="course-paragraph course-paragraph-left" style={{color:"white"}}>
                In this Introduction to Java Programming training course, you gain extensive hands-on experience writing, compiling, and executing Java programs. You will learn to build robust applications that use Java’s object-oriented features. Java is known for reliability, maintainability, and ease of development.
              </p>
            </Slide>
          </div>
          <div className="course-top-left-swap">
            <Fade>
              <img src={JavaOrangeLogo} alt="html/css/js" className="courses-image-sizing"/>
            </Fade>
          </div>
        </div>

        {/*list hidden until mobile*/}
        <ul className="course-list" style={{color:"white"}}>
          <li>
            Design and build robust, object-oriented applications
          </li>
          <li>
            Organize complex data using Java collections
          </li>
          <li>
            Read/write files and handle exceptions
          </li>
          <li>
            Get to know Big O notation and efficicent sorting algorithms.
          </li>
        </ul>

        <Fade>
          <div className="course-link-div">
            <a href={'/courses/introToJava'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>

      {/* AP CS Java */}
      <div style={{background:""}}>
        <h3 className="course-title" style={{color:""}}>
          <strong> AP Computer Science A </strong>
        </h3>
        <div className="course-top-half">
          <div className="course-top-left">
            <Fade>
              <img src={JavaRedLogo} alt="html/css/js" className="courses-image-sizing"/>
            </Fade>
          </div>

          <div className="course-top-right">
            <Slide right>
              <p className="course-paragraph" style={{color:""}}>
                AP CS A teaches object-oriented programming using Java and is meant to be the equivalent of a first semester, college-level course in computer science. It will emphasize problem solving and algorithm development, and use hands-on experiences and examples so that students can apply programming tools and solve complex problems.
              </p>
            </Slide>
          </div>
        </div>

        {/*list hidden until mobile*/}
        <ul className="course-list" style={{color:""}}>
          <li>
            Learn the basics of Java and programming in this course.
          </li>
          <li>
            You'll be able to take the AP CS-A test with ease after this course.
          </li>
          <li>
            Learn more than most intro courses for Computer Science
            at SUNY Colleges offer.
          </li>
        </ul>

        <Fade>
          <div className="course-link-div">
            <a href={'/courses/apcs'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>

      {/* React and Redux */}
      {/* removed until more staff
      <div style={{background:"#282c34"}}>
        <h3 className="course-title" style={{color:"#61dafb"}}>
          <strong> React and Redux </strong>
        </h3>
        <div className="course-top-half">


          <div className="course-top-right">
            <Slide left>
              <p className="course-paragraph course-paragraph-left" style={{color:"#61dafb"}}>
                Heighten your web development prowess with React and Redux. These two JavaScript
                libraries allow you to push your Front-End skills farther than before, and preps
                you for real world projects.
              </p>
            </Slide>
          </div>
          <div className="course-top-left-swap">
            <Fade>
              <img src={ReactReduxLogo} alt="html/css/js" className="courses-image-sizing"/>
            </Fade>
          </div>
        </div>

        {/*list hidden until mobile*/}
        {/*
        <ul className="course-list" style={{color:"#61dafb"}}>
          <li>React will allow you to add statefulness to your HTML/CSS,
            effectively turning it into a way to run JavaScript and allow you
            to open up many new ways of designing functionality for web.
          </li>
          <li>Redux is a container for statefulness, making it easier and lighter
            to code in React.
          </li>
        </ul>

        <Fade>

          <div className="course-link-div">
            <a href={'/courses/react'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>
    */}

      {/* Java DATASTRUCT */}
      <div className="java-gradient">
        <h3 className="course-title" style={{color:"white"}}>
          <strong> Data Structures and Algorithms with Java </strong>
        </h3>
        <div className="course-top-half">
          <div className="course-top-right">
            <Slide left>
              <p className="course-paragraph course-paragraph-left" style={{color:"white"}}>
                Enter into Object Oriented Programming (OOP) with Java. Java is widely used in
                applications deployed all over the world; from apps on your smartphone to large
                databases for multi-billion dollar companies.
              </p>
            </Slide>
          </div>
          <div className="course-top-left-swap">
            <Fade>
              <img src={Data} alt="html/css/js" className="courses-image-sizing"/>
            </Fade>
          </div>
        </div>

        {/*list hidden until mobile*/}
        <ul className="course-list" style={{color:"white"}}>
          <li>
            Learn complex algorithms to use towards problem solving in the workplace.
          </li>
          <li>
            Understand the importance of data management and data structures.
          </li>
          <li>
            Get to know Big O notation and efficicent sorting algorithms.
          </li>
        </ul>

        <Fade>
          <div className="course-link-div">
            <a href={'/courses/java'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>


      <hr style={{marginTop:"2rem", marginBottom:"1rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>

      <Fade>
        <h1 style={{textAlign:"center", paddingTop:"2rem", paddingBottom: "2rem", fontSize:"3rem"}}>
          <strong>Bootcamps</strong>
        </h1>
      </Fade>

      <hr style={{marginTop:"1rem", marginBottom:"2rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>


      {/* Full Stack bootcamp */}
      <div className="fullStackBootcamp-gradient">
        <h3 className="course-title" style={{color:"white"}}>
          <strong> Full Stack Web Development Bootcamp </strong>
        </h3>
        <div className="course-top-half">
          <div className="course-top-right">
            <Slide left>
              <p className="course-paragraph course-paragraph-left" style={{color:"white"}}>
                If you are very invested in programming, and would like to get a job
                in the field, look no further than our 15-week bootcamp.
              </p>
            </Slide>
          </div>
          <div className="course-top-left-swap">
            <Fade>
              <img src={BootcampLogo} alt="html/css/js" className="courses-image-sizing"/>
            </Fade>
          </div>
        </div>

        {/*list hidden until mobile*/}
        <ul className="course-list" style={{color:"white"}}>
          <li>
            Enter our Full Bootcamp and learn all of the topics listed above.
          </li>
          <li>
            Earn the respect you deserve in your interviews with the knowledge you are taught about
            the industry.
          </li>
          <li>
            Be able to complete most full-stack tasks and design full websites.
          </li>
        </ul>

        <Fade>
          <div className="course-link-div">
            <a href={'/bootcamp'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>

      {/* MiniBootcamp  */}
      <div className="bootcamp-gradient">
        <h3 className="course-title" style={{color:"white"}}>
          <strong> Mini-Bootcamp </strong>
        </h3>
        <div className="course-top-half no-bot-margin">
          <div className="course-top-left">
            <Fade>
              <img src={MiniBootcampLogo} alt="html/css/js" className="courses-image-sizing"/>
            </Fade>
          </div>

          <div className="course-top-right">
            <Slide right>
              <p className="course-paragraph" style={{color:"white"}}>
                If you (or your child) is very invested in programming, or wants to get a job later in life
                in the field: look no further. This course is a lighter, more relaxed version of our 15-week bootcamp.
              </p>
            </Slide>
          </div>
        </div>

        {/*list hidden until mobile*/}
        <ul className="course-list" style={{color:"white"}}>
          <li>
            Learn Full-Stack Development in a class focused on the experience of the student.
          </li>
          <li>
            Be assured that you will be able to keep up in the bootcamp, even if you don't have
            as much time to dedicate to it.
          </li>
        </ul>

        <Fade>
          <div className="course-link-div">
            <a href={'/bootcamp/miniBootcamp'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>

      {/* Private Lessons */}

      <hr style={{marginTop:"2rem", marginBottom:"2rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>

      <Fade top>
        <h3 style={{textAlign:"center", paddingTop:"2rem", paddingBottom: "2rem"}}>
          Private Lessons & Tutoring
        </h3>
      </Fade>

      <hr style={{marginTop:"2rem", marginBottom:"2rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>

      <div className="private-gradient">
        <div style={{display:"flex", marginTop:"3%", marginBottom: "3%"}}>
          <Fade>
            <h3 className="course-private-paragraph" style={{textAlign: "center", color:"white", margin:"auto", marginTop:"5%"}}>
              We offer private, 1 on 1 (or more) classes to help you learn the way you're comfortable
              with. We are able to teach any of the above courses to you.
            </h3>
          </Fade>
        </div>
        <Fade>
          <h4 style={{textAlign: "center", color:"white", marginBottom:"2%"}}>
            We go on a student by student basis to make sure we get your needs right.
          </h4>
          <div className="course-link-div">
            <a href={'/courses/privateLessons'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>
    </div>
    return (
      <>
        <Switch>
          <Route exact path="/courses/frontend" render={()=><Frontend/>}/>
          <Route exact path="/courses/introToJava" render={()=><IntroToJava/>}/>
          <Route exact path="/courses/react" render={()=><ReactRedux/>}/>
          <Route exact path="/courses/java" render={()=><Java/>}/>
          <Route exact path="/courses/privateLessons" render={()=><PrivateLessons/>}/>
          <Route exact path="/courses/apcs" render={()=><Apcs/>}/>
          <Route exact path="/courses/bootcampkids" render={()=><Bootcampkids/>}/>
          <Route exact path="/courses" render={()=><div>{course}</div>}/>
        </Switch>
      </>
    );
  }

}

export default Courses;
