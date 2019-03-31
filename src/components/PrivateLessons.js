import React from 'react';
import tutor from '.././images/tutor.svg'
import tutorTwo from '.././images/tutorTwo.svg'

const PrivateLessons = () => (
  <div className="course-top-div">
  <h1 className="center-text bold-text">Private Lessons</h1>

  <div className="course-div">
  <div className="course-image-div">
  <img src={tutor} alt="front end web development extreme coding school" />
  </div>
  <div className="course-desc-div">
    <p>Description: Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?</p>
  </div>
  </div>



  <div className="course-div second-course-div">
  <div className="course-image-div course-padding-left">
    <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text">18+</span> </h5>
    <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text">Beginner - Advanced</span> </h5>
    <h5 className="bold-text course-padding-btm">Paths: <span className="not-bold-text">Coding, Game & Website Development</span> </h5>
  </div>
  <div className="course-image-div course-padding-left">
    <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text">None</span> </h5>
    <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text">Macbook or Linux Laptop</span> </h5>
    <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text">18+</span> </h5>
  </div>
  </div>


  <div className="course-div">
  <div className="course-desc-div-two">
    <h4 className="course-ul-title">What you will learn</h4>
    <ul className="course-ul">
      <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
      <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
      <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
      <li className="course-ul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
    </ul>
  </div>
  <div className="course-image-div">
  <img src={tutorTwo} alt="front end web development extreme coding school" />
  </div>
  </div>




  </div>
);

export default PrivateLessons;
