import React from 'react';
import {Link} from 'react-router-dom'
import javaPic from '.././images/web-dev-adults-img.jpg'
import javaPicTwo from '.././images/web-dev-adults-img-two.jpg'
import CoursesMoreInfo from "./CoursesMoreInfo";


const IntroToJava = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">Intro To Java</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>The intro to Java course teaches fundamental programming topics that include problem solving, design strategies and methodologies, organization of data (data structures), approaches to processing data (algorithms), analysis of potential solutions, and ethical and social implications of computing.</strong></p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Laptop Computer</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>


    <div className="course-div">
      <div className="course-desc-div-two">
        <h4 className="course-ul-title">What you will learn</h4>
        <ul className="course-ul">
          <li className="course-ul">Focus on the basic building blocks of computer science and programming tools. Topics include control structures, primitive and class data types such as arrays, ArrayList and Strings, methods, and recursions.</li>
          <li className="course-ul">Introduction to Java, Strings, Loops, One-Dimensional Arrays and Methods</li>
          <li className="course-ul">Learn how to manipulate data to create more sophisticated programs, with topics including class design, algorithm development and user-defined data types.</li>
          <li className="course-ul">User Defined Classes, Advanced Classes, Algorithms, Two-Dimensional Arrays and Exam Preparation</li>
        </ul>
      </div>
      <div className="course-image-div">
        <img src={javaPicTwo} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"25rem"}}/>
      </div>
    </div>

    <CoursesMoreInfo courseDuration = {"8 weeks"} schedule = {"Monday & Wednesday"} courseHours = {"8:30 am - 12:30 pm | 1:00 pm - 5:00 pm"} starting = {"May 06, 2019"} applyLink = {"/apply/javaIntro8MW"} courseName = {"Intro to Java Mon & Wed"}/>
    <CoursesMoreInfo courseDuration = {"8 weeks"} schedule = {"Tuesday & Thursday"} courseHours = {"8:30 am - 12:30 pm | 1:00 pm - 5:00 pm"} starting = {"May 07, 2019"} applyLink = {"/apply/javaIntro8TTR"} courseName = {"Intro to Java Tues & Thurs"}/>


    <div className="course-div second-course-div">
      <div className="course-ul-div">
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 weeks</span> </h5>
          <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Saturday & Sunday</span> </h5>
          <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 3:30 pm </span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 11, 2019</span> </h5>
        <Link to="/apply/javaIntro4ss" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now Intro to Sat & Sun</Link>
        </div>
      </div>
    </div>





  </div>
);

export default IntroToJava;
