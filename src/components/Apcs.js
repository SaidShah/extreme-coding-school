import React from 'react';
import {Link} from 'react-router-dom'
import apcs from '.././images/apcs.svg'
import apcsTwo from '.././images/apcsTwo.svg'

const Apcs = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">AP Computer Science A</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={apcs} alt="front end web development extreme coding school" className="course-image"
          style={{width:"75%", height:"75%"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong> The AP Computer Science A course teaches fundamental programming topics that include problem solving, design strategies and methodologies, organization of data (data structures), approaches to processing data (algorithms), analysis of potential solutions, and ethical and social implications of computing.</strong></p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Beginner - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text">  Algebra I is required; Algebra II is recommended.</span> </h5>
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
          <li className="course-ul"> User Defined Classes, Advanced Classes, Algorithms, Two-Dimensional Arrays and Exam Preparation</li>
        </ul>
      </div>
      <div className="course-image-div">
        <img src={apcsTwo} alt="front end web development extreme coding school" className="course-image"
        style={{width:"100%", height:"100%"}}/>
      </div>
    </div>


    <div className="course-div second-course-div">
      <div className="course-ul-div">
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 8 weeks</span> </h5>
          <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Monday & Wednesday</span> </h5>
          <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 10:30 pm | 1:00 pm - 3:00 pm</span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 06, 2019</span> </h5>
        <Link to="/apply/apCSa8mw" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now AP Computer Science Mon A & Wed</Link>
        </div>
      </div>
    </div>

    <div className="course-div second-course-div">
      <div className="course-ul-div">
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 8 weeks</span> </h5>
          <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Tuesday & Thursday</span> </h5>
          <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 10:30 pm | 1:00 pm - 3:00 pm</span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 07, 2019</span> </h5>
        <Link to="/apply/apCSa4tr" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now AP Computer Science A Tues & Thur</Link>
        </div>
      </div>
    </div>

    <div className="course-div second-course-div">
      <div className="course-ul-div">
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 weeks</span> </h5>
          <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Saturday & Sunday</span> </h5>
          <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 12:30 pm | 1:00 pm - 5:00 pm</span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 11, 2019</span> </h5>
        <Link to="/apply/apCSa8" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now AP Computer Science A Sat & Sun</Link>
        </div>
      </div>
    </div>



  </div>
);

export default Apcs;
