import React from 'react';
import {Link} from 'react-router-dom'
import apcs from '.././images/apcs.svg'
import apcsTwo from '.././images/apcsTwo.svg'

const Apcs = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">AP Computer Science | Intro to Java</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={apcs} alt="front end web development extreme coding school" className="course-image"
          style={{width:"75%"}}/>
      </div>
      <div className="course-desc-div">
        <p>Description: Do you want to learn a set of highly marketable skills in web development in a short period of time? This Web Development crash course might just be the right path for you. In five days a week for eight weeks, you will be immersed in learning a complete set of web technologies hands-on, guided by our instructors. By the end of the course, you will have built several individual and group web apps to showcase your skills.</p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-ul-div">
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text">15+</span> </h5>
          <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text">Beginner - Advanced</span> </h5>
          <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text">$4800</span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text">Basic understanding of Algebra & a laptop(preferably a Mac)</span> </h5>
          <h5 className="bold-text course-padding-btm">Time and Duration:  <span className="not-bold-text">8:30 AM to 4:30 PM, Monday Through Friday, 8 weeks.</span> </h5>
          <h5 className="bold-text course-padding-btm">What you will learn: <span className="not-bold-text">HTML, CSS, JavaScript, Bootstrap, React, Redux, Ruby-on-Rails, and more.</span> </h5>
        </div>
      </div>
    </div>


    <div className="course-div">
      <div className="course-desc-div-two">
        <h4 className="course-ul-title">Who this class is for:</h4>
        <ul className="course-ul">
          <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
          <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
          <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
          <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
        </ul>
        <Link to="/apply/apCSa" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now AP Computer Science A Mon & Wed 8 Weeks</Link>
      </div>
      <div className="course-image-div">
        <img src={apcsTwo} alt="front end web development extreme coding school" className="course-image"
        style={{width:"100%"}}/>
      </div>
    </div>




  </div>
);

export default Apcs;
