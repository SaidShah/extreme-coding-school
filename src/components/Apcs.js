import React from 'react';
import {Link} from 'react-router-dom'
import apcs from '.././images/image-ap.jpg'
import apcsTwo from '.././images/adult_learning.jpg'
import CoursesMoreInfo from "./CoursesMoreInfo";

const Apcs = () => (



  <div className="course-top-div">
    <h1 className="center-text bold-text">AP Computer Science A{window.scrollTo(0,0)}</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={apcs} alt="front end web development extreme coding school" className="course-image"
          style={{width:"25rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong> The AP Computer Science A course teaches fundamental programming topics that include problem solving, design strategies and methodologies, organization of data (data structures), approaches to processing data (algorithms), analysis of potential solutions, and ethical and social implications of computing.</strong></p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Beginner - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> A Laptop</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 8 or 4 week course</span> </h5>
      </div>
    </div>


    <div className="course-div">
      <div className="course-desc-div-two">
        <h4 className="course-ul-title">What you will Learn:</h4>
        <ul className="course-ul">
          <li className="course-ul">Focus on the basic building blocks of computer science and programming tools. Topics include control structures, primitive and class data types such as arrays, ArrayList and Strings, methods, and recursions.</li>
          <li className="course-ul">Introduction to Java, Strings, Loops, One-Dimensional Arrays and Methods</li>
          <li className="course-ul">Learn how to manipulate data to create more sophisticated programs, with topics including class design, algorithm development and user-defined data types.</li>
          <li className="course-ul">User Defined Classes, Advanced Classes, Algorithms, Two-Dimensional Arrays and Exam Preparation</li>
        </ul>
      </div>
      <div className="course-image-div">
        <img src={apcsTwo} alt="front end web development extreme coding school" className="course-image"
        style={{width:"30rem", height:"25rem"}}/>
      </div>
    </div>

    <CoursesMoreInfo courseDuration = {"8 weeks"} schedule = {"Monday & Wednesday"} courseHours = {"8:30 am - 10:30 pm | 1:00 pm - 3:00 pm"} starting = {"May 06, 2019"} applyLink = {"/apply/apCSa8mw"} courseName = {"AP Computer Science A Mon & Wed"}/>
    <CoursesMoreInfo courseDuration = {"8 weeks"} schedule = {"Tuesday & Thursday"} courseHours = {"8:30 am - 10:30 pm | 1:00 pm - 3:00 pm"} starting = {"May 07, 2019"} applyLink = {"/apply/apCSa4tr"} courseName = {"AP Computer Science A Tues & Thur"}/>
    <CoursesMoreInfo courseDuration = {"4 weeks"} schedule = {"Saturday & Sunday"} courseHours = {"8:30 am - 3:30 pm"} starting = {"May 11, 2019"} applyLink = {"/apply/apCSa8"} courseName = {"AP Computer Science A Sat & Sun"}/>



  </div>
);

export default Apcs;
