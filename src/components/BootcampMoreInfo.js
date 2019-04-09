import React from 'react'

const BootcampMoreInfo = (props) => {
    return (
        <>
          <h2 className="blue-text bold-text" style={{marginBottom: "2%"}}>Schedule</h2>
          <p className="bootcamp-p">{props.schedule}</p>
          <h2 className="blue-text bold-text" style={{marginBottom: "2%"}}>Prerequisites</h2>
          <p className="bootcamp-p">Those who wish to take this course must first pass a coding challenge.</p>
          <h2 className="blue-text bold-text" style={{marginBottom: "2%"}}>Tuition</h2>
          <p className="bootcamp-p">{props.tuition}</p>
        </>
    );
}

export default BootcampMoreInfo;