import React from 'react'
import {Link} from 'react-router-dom'

const CourseListing = (props) => {
  return (
    <div className="course-div second-course-div">
      <div className="course-date-div">
        <h4 className="not-bold-text">
          Starting:&nbsp;
          <span className="not-bold-text">
            {props.starting}
          </span>
          ,&nbsp;
          <span className="not-bold-text">
            {props.schedule}
          </span>
          &nbsp;Class
        </h4>
      </div>
      <div style={{width:"100%", display:"flex"}}>
        <div className="course-ul-div">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">Duration:&nbsp;
              <span className="not-bold-text">
                {props.courseDuration}</span>
            </h5>
            <h5 className="bold-text course-padding-btm">Schedule:&nbsp;
              <span className="not-bold-text">
                {props.schedule}
              </span>
            </h5>


          </div>
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">Hours:&nbsp;
              <span className="not-bold-text">
                {props.courseHours}
              </span>
            </h5>
            <Link to={props.applyLink} className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">
              Apply Now {props.courseName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseListing;
