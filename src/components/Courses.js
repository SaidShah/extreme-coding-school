import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Frontend from './Frontend'
import ReactRedux from './ReactRedux'
import PrivateLessons from './PrivateLessons'
import Java from './Java'
import Apcs from './Apcs'
import FrontLogo from '.././images/htmlcssjs.svg'
import ReactReduxLogo from '.././images/reactredux.svg'
import JavaRedLogo from '.././images/java-red.svg'
import JavaOrangeLogo from '.././images/java-orange.svg'
import BootcampLogo from '.././images/bootcamp.svg'
import {Route, Link, Switch} from 'react-router-dom'


class Courses extends Component {

  render() {

    const course =  <div>
      <div style={{display:"grid"}}>

        <p style={{width:"90%", textAlign: "center", margin:"auto", marginTop: "5%", fontSize: "2rem"}}>
          Here at Extreme, we offer many different courses for our students to choose from. We have everything
          from the Full-Stack development course like Boot Camp to learn everything
          you need to get a job in web development, or a smoother, and lighter,
          Front End course that allows students to learn about the basics of web design.
        </p>

        <h2 style={{textAlign:"center", marginTop: "5%", marginBottom: "3%"}}>
          (Here's a more in-depth look at what we offer.)
        </h2>
      </div>

      {/* Front End */}
      <div style={{background:"#7fc6ff"}}>
        <h1 className="course-title">
          Web Development
        </h1>
        <div className="course-top-half">
          <div className="course-top-left">
            <Fade>
              <img src={FrontLogo} alt="html/css/js" style={{width:"50%", margin:"auto", height:"75%"}}/>
            </Fade>
          </div>

          <div className="course-top-right">
            <Slide right>
              <p className="course-paragraph">
                Build your own website! Learn HTML5, CSS3, and Javascript with
                our Front End Web Development course.
                We go into all that you would need to know to design and build a website
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
            Learn Javascript and create reactive web pages that puts you on a higher level
          </li>
        </ul>

        <Fade>
          <h4 className="center-text">
            We offer either an 8 Week, Weekend Course or a 4 Week,
            Weekday Course.
          </h4>
          <div className="course-link-div">
            <Link to={'/courses/frontend'} className="course-link">
              <button className="btn course-btn btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </Link>
          </div>
        </Fade>
      </div>

      {/* React and Redux */}
      <div style={{background:"#282c34"}}>
        <h1 className="course-title" style={{color:"#61dafb"}}>
          React and Redux
        </h1>
        <div className="course-top-half">


          <div className="course-top-right">
            <Slide left>
              <p className="course-paragraph" style={{color:"#61dafb"}}>
                Heighten your web development prowess with React and Redux. These two Javascript
                libraries allow you to push your Front End skills farther than before, and preps
                you for real world projects.
              </p>
            </Slide>
          </div>
          <div className="course-top-left-swap">
            <Fade>
              <img src={ReactReduxLogo} alt="html/css/js" style={{width:"85%", margin:"auto", height:"75%"}}/>
            </Fade>
          </div>
        </div>

        {/*list hidden until mobile*/}
        <ul className="course-list" style={{color:"#61dafb"}}>
          <li>React will allow you to add statefulness to your HTML/CSS,
            effectively turning it into a way to run Javascript and allow you
            to open up many new ways of designing functionality for web.
          </li>
          <li>Redux is a container for statefulness, making it easier and lighter
            to code in React.
          </li>
        </ul>

        <Fade>
          <h4 className="center-text" style={{color:"#61dafb"}}>
            We offer an 8 Week, Weekday Night Course.
          </h4>
          <div className="course-link-div">
            <Link to={'/courses/react'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </Link>
          </div>
        </Fade>
      </div>

      {/* AP CS Java */}
      <div style={{background:""}}>
        <h1 className="course-title" style={{color:""}}>
          AP CS : Intro to Java
        </h1>
        <div className="course-top-half">
          <div className="course-top-left">
            <Fade>
              <img src={JavaRedLogo} alt="html/css/js" style={{width:"50%", margin:"auto", height:"75%"}}/>
            </Fade>
          </div>

          <div className="course-top-right">
            <Slide right>
              <p className="course-paragraph" style={{color:""}}>
                Want to get started on AP early or get college credit over the summer with us?
                How about just learn the basics of Java? We're your go-to with this course. We
                teach the basics of Java, which covers AP CS or all Intro Java College courses.
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
            Learn the more than most intro courses for Computer Science
            at SUNY Colleges.
          </li>
        </ul>

        <Fade>
          <h4 className="center-text" style={{color:""}}>
            We offer an 8 Week, Weekday Night Course.
          </h4>
          <div className="course-link-div">
            <Link to={'/courses/apcs'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </Link>
          </div>
        </Fade>
      </div>


      {/* Java DATASTRUCT */}
      <div className="java-gradient">
        <h1 className="course-title" style={{color:"white"}}>
          Data Structures and Algorithms with Java
        </h1>
        <div className="course-top-half">
          <div className="course-top-right">
            <Slide left>
              <p className="course-paragraph" style={{color:"white"}}>
                Enter into Object Oriented Programming (OOP) with Java. Java is widely used in
                applications deployed all over the world; from apps on your smartphone to large
                databases for multi-billion dollar companies.
              </p>
            </Slide>
          </div>
          <div className="course-top-left-swap">
            <Fade>
              <img src={JavaOrangeLogo} alt="html/css/js" style={{width:"40%", margin:"auto", height:"30%"}}/>
            </Fade>
          </div>
        </div>

        {/*list hidden until mobile*/}
        <ul className="course-list" style={{color:"white"}}>
          <li>React will allow you to add statefulness to your HTML/CSS,
            effectively turning it into a way to run Javascript and allow you
            to open up many new ways of designing functionality for web.
          </li>
          <li>Redux is a container for statefulness, making it easier and lighter
            to code in React.
          </li>
        </ul>

        <Fade>
          <h4 className="center-text" style={{color:"white"}}>
            We offer an 8 Week, Weekday Night Course.
          </h4>
          <div className="course-link-div">
            <Link to={'/courses/java'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </Link>
          </div>
        </Fade>
      </div>

      {/* Bootcamp 4 kids */}
      <div className="bootcamp-gradient">
        <h1 className="course-title" style={{color:"white"}}>
          Bootcamp For Young Adults
        </h1>
        <div className="course-top-half">
          <div className="course-top-left">
            <Fade>
              <img src={BootcampLogo} alt="html/css/js" style={{width:"55%", margin:"auto", height:"75%"}}/>
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
          <h4 className="center-text" style={{color:"white"}}>
            We offer an 8 Week, Weekday Night Course.
          </h4>
          <div className="course-link-div">
            <Link to={'/courses/apcs'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </Link>
          </div>
        </Fade>
      </div>


      {/* Private Lessons */}

      <hr style={{marginTop:"2rem", marginBottom:"2rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>

      <Fade top>
        <h2 style={{textAlign:"center", paddingTop:"2rem", paddingBottom: "2rem"}}>
          In case you're wondering: We offer private classes.
        </h2>
      </Fade>

      <hr style={{marginTop:"2rem", marginBottom:"2rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>

      <div className="private-gradient">
        <h1 style={{textAlign: "center", paddingTop:"3%", color:"white"}}>
          Private Classes
        </h1>
        <div style={{display:"flex", marginTop:"8%", marginBottom: "8%"}}>
          <Fade>
            <p style={{width:"80%", textAlign: "center", fontSize: "2rem", color:"white", margin:"auto"}}>
              We offer private, 1 on 1 (or more) classes to help you learn the way you're comfortable
              with. We are able to teach any of the above courses to you.
            </p>
          </Fade>
        </div>
        <Fade>
          <h4 style={{textAlign: "center", color:"white"}}>
            We go on a student by student basis to make sure we get your needs right.
          </h4>
          <div className="course-link-div">
            <Link to={'/courses/privateLessons'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
    return (
      <>
        <Switch>
          <Route exact path="/courses/frontend" render={()=><Frontend/>}/>
          <Route exact path="/courses/react" render={()=><ReactRedux/>}/>
          <Route exact path="/courses/java" render={()=><Java/>}/>
          <Route exact path="/courses/privateLessons" render={()=><PrivateLessons/>}/>
          <Route exact path="/courses/apcs" render={()=><Apcs/>}/>
          <Route exact path="/courses" render={()=><div>{course}</div>}/>
        </Switch>
      </>
    );
  }

}

export default Courses;
