import React from 'react';
import tutor from '.././images/private1.jpg'
import tutorTwo from '.././images/private2.jpg'

const PrivateLessons = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">Private Lessons</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={tutor} alt="front end web development extreme coding school" className="course-image"
         style={{width:"25rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>We tutor in placeholder text, among a great many things!</strong> </p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages:
          <span className="not-bold-text"> Any</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Skill Level:
          <span className="not-bold-text"> Beginner - Advanced</span>
        </h5>
        <h5 className="bold-text course-padding-btm"> Price:
          <span className="not-bold-text"> $60/hour</span>
        </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite:
          <span className="not-bold-text"> None</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Tools:
        <span className="not-bold-text"> Macbook or Linux laptop</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Duration:
          <span className="not-bold-text"> 60 minute increments</span>
        </h5>
      </div>
    </div>



    <div className="course-div">
      <div className="course-desc-div-two">
        <h4 className="course-ul-title">What we Tutor</h4>
        <p className="font-size-1-4 p-desc-width">We tutor any of the courses taught at our school. We also may be willing to teach other topics on a case by case basis</p>
      </div>
      <div className="course-image-div">
        <img src={tutorTwo} alt="front end web development extreme coding school"
        className="course-image" style={{width:"25rem", height:"20rem"}}/>
      </div>
    </div>




  </div>
);

export default PrivateLessons;
