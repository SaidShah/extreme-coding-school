import React from 'react'
import {Link} from 'react-router-dom'

const BootcampMoreInfo = (props) => {
    return (
        <div className="course-div second-course-div">
          <div className="course-ul-div">
            <div className="course-double-ul-div course-padding-left">
              <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> {props.campDuration}</span> </h5>
              <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> {props.schedule}</span> </h5>
              <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> {props.campHours} </span> </h5>
              <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 06, 2019</span> </h5>

            </div>
            <div className="course-double-ul-div course-padding-left">
              <h5 className="bold-text course-padding-btm">Prerequisites: <span className="not-bold-text">You must complete a coding challenge.</span></h5>
              <h5 className="bold-text course-padding-btm">Tuition: <span className="not-bold-text">{props.tuition}</span></h5>
              <Link to={props.applyLink} className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">
                Apply Now {props.campName}
              </Link>
            </div>
          </div>
        </div>
    );
}

export default BootcampMoreInfo;
