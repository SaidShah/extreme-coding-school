import React from 'react';
import tutor from '.././images/private1.jpg'
import tutorTwo from '.././images/private2.jpg'

const PrivateLessons = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">Private Lessons</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={tutor} alt="front end web development extreme coding school" className="course-image"
         style={{width:"80%", height:"100%"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4">
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
        <h5 className="bold-text course-padding-btm">Prerequisites:
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
        <p>We will tutor any of the courses offered on our site. In addition, we may be able to cover other topics on a case by case basis.</p>
      </div>
      <div className="course-image-div">
        <img src={tutorTwo} alt="front end web development extreme coding school"
        className="course-image" style={{width:"70%", height:"100%"}}/>
      </div>
    </div>




  </div>
);

export default PrivateLessons;
