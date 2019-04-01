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
          style={{width:"100%"}}/>
      </div>
      <div className="course-desc-div">
        <p>
          Do you want to learn front-end web development in a
          short period of time? Do you have a great idea but need the
          knowledge and skills to make it happen? Have you struggled to
          build a website for your organization or yourself? We want to
          share with you how to create websites with dynamic content using
          the most cutting-edge technologies. By taking this course, you can
          successfully build your own sites to implement your own ideas.
        </p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages:
          <span className="not-bold-text">18+</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Skill Level:
          <span className="not-bold-text">Beginner - Advanced</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Paths:
          <span className="not-bold-text">Coding, Game & Website Development</span>
        </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite:
          <span className="not-bold-text">None</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Tools:
          <span className="not-bold-text">Macbook or Linux Laptop</span>
        </h5>
      </div>
    </div>


    <div className="course-div">
      <div className="course-desc-div-two">
        <h4 className="course-ul-title" >What you will learn</h4>
        <ul className="course-ul">
          <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
          <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
          <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
          <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
        </ul>
        <Link to="/apply/frontEndWebDev4" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now Web Development 4 weeks Sat & Sun</Link>
        <Link to="/apply/frontEndWebDev8" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now Web Development 8 weeks Tues & Thurs</Link>
      </div>
      <div className="course-image-div">
        <img src={frontEndTwo} alt="front end web development extreme coding school" className="course-image"
          style={{width:"100%"}}/>
      </div>
    </div>




  </div>
);

export default Frontend;
