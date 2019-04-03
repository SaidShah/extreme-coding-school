import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Frontend from './Frontend'
import ReactRedux from './ReactRedux'
import PrivateLessons from './PrivateLessons'
import Java from './Java'
import Apcs from './Apcs'
import Bootcampkids from './bootcampkids'
import FrontLogo from '.././images/htmlcssjs.svg'
import ReactReduxLogo from '.././images/reactredux.svg'
import JavaRedLogo from '.././images/java-red.svg'
import JavaOrangeLogo from '.././images/java-orange.svg'
import BootcampLogo from '.././images/bootcamp.svg'
import {Route, Switch} from 'react-router-dom'


class Courses extends Component {

  render() {

    const course =  <div>


      {/* Front End */}
      <div style={{background:"#7fc6ff"}}>
        <h1 className="course-title">
          <strong> Web Development </strong>
        </h1>
        <div className="course-top-half no-bot-margin">
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
          <div className="course-link-div">
            <a href={'/courses/frontend'} className="course-link">
              <button className="btn course-btn btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>

      {/* React and Redux */}
      <div style={{background:"#282c34"}}>
        <h1 className="course-title" style={{color:"#61dafb"}}>
          <strong> React and Redux </strong>
        </h1>
        <div className="course-top-half">


          <div className="course-top-right">
            <Slide left>
              <p className="course-paragraph course-paragraph-left" style={{color:"#61dafb"}}>
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

          <div className="course-link-div">
            <a href={'/courses/react'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>

      {/* AP CS Java */}
      <div style={{background:""}}>
        <h1 className="course-title" style={{color:""}}>
          <strong> AP Computer Science A </strong>
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


      {/* Java DATASTRUCT */}
      <div className="java-gradient">
        <h1 className="course-title" style={{color:"white"}}>
          <strong> Data Structures and Algorithms with Java </strong>
        </h1>
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
              <img src={JavaOrangeLogo} alt="html/css/js" style={{width:"40%", margin:"auto", height:"30%"}}/>
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


      {/* Bootcamp 4 kids */}
      <div className="bootcamp-gradient">
        <h1 className="course-title" style={{color:"white"}}>
          <strong> Mini Bootcamp </strong>
        </h1>
        <div className="course-top-half no-bot-margin">
          <div className="course-top-left">
            <Fade>
              <img src={BootcampLogo} alt="html/css/js" style={{width:"60%", margin:"auto", height:"75%"}}/>
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
            <a href={'/courses/bootcampkids'} className="course-link">
              <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem"}}>
                More Info
              </button>
            </a>
          </div>
        </Fade>
      </div>


      {/* Full Stack bootcamp */}
      <div className="fullStackBootcamp-gradient">
        <h1 className="course-title" style={{color:"white"}}>
          <strong> Full Stack Web Development Bootcamp </strong>
        </h1>
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
              <img src={BootcampLogo} alt="html/css/js" style={{width:"40%", margin:"auto", height:"30%"}}/>
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
          <strong> Private Lessons & Tutoring </strong>
        </h1>
        <div style={{display:"flex", marginTop:"8%", marginBottom: "8%"}}>
          <Fade>
            <p style={{width:"80%", textAlign: "center", fontSize: "2em", color:"white", margin:"auto"}}>
              We offer private, 1 on 1 (or more) classes to help you learn the way you're comfortable
              with. We are able to teach any of the above courses to you.
            </p>
          </Fade>
        </div>
        <Fade>
          <h4 style={{textAlign: "center", color:"white", fontSize:"1.7em"}}>
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
