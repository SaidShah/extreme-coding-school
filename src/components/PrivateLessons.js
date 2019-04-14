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
        <strong>Our tutoring / private lessons option can be completely tailor made according to your needs and objectives.
          This option is particularly useful for students who have a very particular need or for students who wish to learn very intensively.
          We tutor all of the courses taught at our school, and may also be willing to cover other topics on a case
          by case basis. To schedule a time for tutoring, please contact us at tutoring@extremecodingschool.com  </strong> </p>
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
          <a href={"mailto:tutoring@extremecodingschool.com"} className="not-bold-text white-text"> tutoring@extremecodingschool.com</a>
        </h5>
      </div>
    </div>

  </div>
);

export default PrivateLessons;
