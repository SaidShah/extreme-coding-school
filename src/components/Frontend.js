import React from 'react';
import {Link} from 'react-router-dom'
import frontEnd from '.././images/front-end.svg'
import frontEndTwo from '.././images/front-end-two.svg'

const Frontend = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">Web Development</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={frontEnd} alt="front end web development extreme coding school" className="course-image"
          style={{width:"100%", height:"100%"}}/>
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
        <h5 className="bold-text course-padding-btm">Ages:
          <span className="not-bold-text"> 15+</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Skill Level:
          <span className="not-bold-text"> Beginner - Advanced</span>
        </h5>
        <h5 className="bold-text course-padding-btm"> Price:
          <span className="not-bold-text"> $1,280</span>
        </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite:
          <span className="not-bold-text"> Basic understanding of Algebra</span>
        </h5>
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
          style={{width:"100%", height:"100%"}}/>
      </div>
    </div>


    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Duration:
          <span className="not-bold-text"> 4 weeks</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Schedule:
          <span className="not-bold-text"> Saturday & Sunday</span>
        </h5>
        <h5 className="bold-text course-padding-btm"> Hours:
          <span className="not-bold-text"> 8:30 am - 4:30 pm</span>
        </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting:
          <span className="not-bold-text"> May 11, 2019</span>
        </h5>

        <Link to="/apply/frontEndWebDev4" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">
          Apply Now 4 week course
        </Link>

      </div>
    </div>
    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Duration:
          <span className="not-bold-text"> 8 weeks</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Schedule:
          <span className="not-bold-text"> Tuesday & Thursday</span>
        </h5>
        <h5 className="bold-text course-padding-btm"> Hours:
          <span className="not-bold-text"> 12:30 pm - 4:30 pm</span>
        </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting:
          <span className="not-bold-text"> May 07, 2019</span>
        </h5>

        <Link to="/apply/frontEndWebDev8" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">
          Apply Now 8 week course
        </Link>

      </div>
    </div>

  </div>
);

export default Frontend;
