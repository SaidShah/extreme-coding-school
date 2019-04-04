import React from 'react';
import {Link} from 'react-router-dom'
import apcs from '.././images/apcs.svg'
import apcsTwo from '.././images/apcsTwo.svg'

const bootcampkids= () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">Mini Bootcamp</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={apcs} alt="front end web development extreme coding school" className="course-image"
          style={{width:"75%", height:"75%"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>If you are a beginner to coding, you may take this course. If you’re a high school student who would like to learn web development to make you stand out from the crowd in your college application, take this course to increase the edge and show your passion in Computer Science. If you are an experienced desktop programmer, take this course to get up to speed quickly with web app development. If you are seasoned web developer, this is a fast-track way of learning some of the modern technologies such as HTML5, CSS3, Bootstrap, React, Redux, and Ruby-on-Rails.</strong></p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-ul-div">
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
          <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
          <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $4,800</span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisites: <span className="not-bold-text"> Basic understanding of algebra</span> </h5>
          <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> A Laptop</span> </h5>
          <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 8 week Course</span> </h5>
        </div>
      </div>
    </div>


    <div className="course-div">
      <div className="course-desc-div-two">
        <h4 className="course-ul-title">What you will learn:</h4>
        <ul className="course-ul">
          <li className="course-ul">Monday - Friday 9:00 am - 1:00 pm</li>
          <li className="course-ul">Monday - Friday 1:30 pm - 5:30 pm</li>
          <li className="course-ul">Monday - Friday 5:30 pm - 9:30 pm</li>
          <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
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
          <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Monday - Friday</span> </h5>
          <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 4:30 pm</span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 06, 2019</span> </h5>
        <Link to="/apply/bootcampTeens" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now for Mini Bootcamp</Link>
        </div>
      </div>
    </div>




  </div>
);

export default bootcampkids;
