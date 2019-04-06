import React from 'react';
import {Link} from 'react-router-dom'
import react from '.././images/react-logo.svg'
import redux from '.././images/redux-logo.svg'

const ReactRedux = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">React & Redux</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={react} alt="front end web development extreme coding school" className="course-image"
          style={{width:"50%", height:"100%"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>React is one of the most popular libraries for JavaScript with over 100,000 stars on Github. It was built as an open source project by Facebook and is the view layer in MVC frameworks. If you know javascript and just want to gain new skills with new technologies, then React-Redux is for you. Learn to build powerful modular web applications. Transfer those skills with React Native and build full functional and native mobile applications. Learn state management with Redux and remove all of the complexity of tracking data. Learn to use the React and Redux devtools to make programming fun and interactive.</strong></p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text"> Knowledge of HTML, CSS, JavaScript</span> </h5>
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Macbook or Linux Laptop</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>


    <div className="course-div">
      <div className="course-desc-div-two">
        <h4 className="course-ul-title">What you will learn</h4>
        <ul className="course-ul">
          <li className="course-ul">Learn React Components and related terms like JSX, Babel, Props, State etc... </li>
          <li className="course-ul">Learn how to build custom reusable React Components</li>
          <li className="course-ul">Use React-router to build routes for you application</li>
          <li className="course-ul">Learn to incorporate redux as a layer for state management</li>
          <li className="course-ul">Incorporate reducers, actions and thunk for fetching from API's</li>
          <li className="course-ul">Publish React App websites using Node and Firebase</li>
        </ul>
      </div>
      <div className="course-image-div">
        <img src={redux} alt="front end web development extreme coding school" className="course-image"
          style={{width:"50%"}}/>
      </div>
    </div>

    <div className="course-div second-course-div">
      <div className="course-ul-div">
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 weeks</span> </h5>
          <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Monday & Wednesday</span> </h5>
          <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 12:30 pm</span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 06, 2019</span> </h5>
        <Link to="/apply/react" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now React & Redux</Link>
        </div>
      </div>
    </div>




  </div>
);

export default ReactRedux;
