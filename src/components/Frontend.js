import React from 'react';
import {Link} from 'react-router-dom'
import frontEnd from '.././images/people_coding_around_desk.jpg'
import frontEndTwo from '.././images/group_hacking.jpg'
import CourseListing from "./CourseListing";

const Frontend = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">Web Development{window.scrollTo(0,0)}</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={frontEnd} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
          <strong> If you would like to learn a set of highly marketable skills in web development in a short period of time,
            then this Web Development crash course might just be the right path for you.
            We provide two options: two days a week for four weeks at 8 hours per day, or two days a week for 8 weeks at 4 hours per day.
            You will be immersed in learning a complete set of web technologies hands-on, guided by our instructors.
            By the end of the course, you will have built several individual and group web apps to showcase your
            skills.
          </strong>
        </p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Skill Level:
          <span className="not-bold-text"> Beginner - Advanced</span>
        </h5>
        <h5 className="bold-text course-padding-btm"> Price:
          <span className="not-bold-text"> $1,280</span>
        </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Tools:
          <span className="not-bold-text"> A Laptop</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Duration:
          <span className="not-bold-text"> 4 or 8 week course</span>
        </h5>
      </div>
    </div>


    <div className="course-div">
      <div className="course-desc-div-two">
        <div>
          <h4 className="course-ul-title" >What you will learn:</h4>
          <ul className="course-ul">
            <li className="course-ul">How to design and build static websites with just HTML</li>
            <li className="course-ul">How to incorporate CSS and Bootstrap to make fancy creative websites and more...</li>
            <li className="course-ul">Incorporate JavaScript to make dynamic multi-functional websites and more... </li>
            <li className="course-ul">RESTful routes and API's to get data for you websites and more....</li>
          </ul>
        </div>
      </div>
      <div className="course-image-div">
        <img src={frontEndTwo} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
    </div>

    <CourseListing
        courseDuration = {"4 weeks"}
        schedule = {"Saturday & Sunday"}
        courseHours = {"8:30 am - 4:30 pm"}
        starting = {"May 11, 2019"}
        applyLink = {"/apply/frontEndWebDev4"}
        courseName = {"4 week course"}
    />

    <CourseListing
        courseDuration = {"8 weeks"}
        schedule = {"Tuesday & Thursday"}
        courseHours = {"12:30 pm - 4:30 pm"}
        starting = {"May 07, 2019"}
        applyLink = {"/apply/frontEndWebDev8"}
        courseName = {"8 week course"}
    />

  </div>
);

export default Frontend;
