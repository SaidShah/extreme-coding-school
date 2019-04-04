import React from 'react';
import {Link} from 'react-router-dom'
import javaPic from '.././images/database.svg'
import javaPicTwo from '.././images/algorithm.svg'

const  Java = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">Java: Data Structures & Algorithms</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"50%"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?</strong></p>
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
          <span className="not-bold-text"> $960</span>
        </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite:
          <span className="not-bold-text"> Intro to Java or Code Challenge</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Tools:
        <span className="not-bold-text"> A Laptop</span>
        </h5>
        <h5 className="bold-text course-padding-btm">Duration:
          <span className="not-bold-text"> 4 or 8 week track</span>
        </h5>
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
        <img src={javaPicTwo} alt="front end web development extreme coding school" className="course-image"
          style={{width:"50%", height:"75%"}}/>
      </div>
    </div>

    <div className="course-div second-course-div">
      <div className="course-ul-div">
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 8 weeks</span> </h5>
          <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Monday & Wednesday</span> </h5>
          <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 11:30 am | 12:30 pm - 3:00 pm</span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 06, 2019</span> </h5>
        <Link to="/apply/dataStructuresMW" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now Java Data Structures & Algorithms Mon & Wed</Link>
        </div>
      </div>
    </div>

    <div className="course-div second-course-div">
      <div className="course-ul-div">
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 8 weeks</span> </h5>
          <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Monday & Wednesday</span> </h5>
          <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 11:30 am | 12:30 pm - 3:00 pm</span> </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 07, 2019</span> </h5>
        <Link to="/apply/dataStructuresTR" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now Java Data Structures & Algorithms Tues & Thur</Link>
        </div>
      </div>
    </div>




  </div>
);

export default Java
