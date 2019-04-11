import React from 'react';
import tutor from '.././images/private1.jpg'
//import tutorTwo from '.././images/private2.jpg'

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
        <strong>We tutor any of the courses taught at our school. We also may be willing to teach other topics on a case
          by case basis. While there are no official prerequisites, if you wanted to learn about data structures,
          for example, you should have a basic understanding of ___. To schedule a time for tutoring, please contact us at placeholder.  </strong> </p>
      </div>
    </div>



    <div className="course-div second-course-div">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm"> Price:
          <span className="not-bold-text"> $60/hour</span>
        </h5>


      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Contact:
          <span className="not-bold-text"> 60 minute increments</span>
        </h5>
      </div>
    </div>

  </div>
);

export default PrivateLessons;
