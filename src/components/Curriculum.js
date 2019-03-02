import React from 'react';
import curr_img from '.././images/person-coding.png'

const Curriculum = () => (
  <div>

  <div className="padding-after-jumbotron row">


  <div className="column-left-side center-text">
    <h3 className="blue-text bold-text">Enrolling Now</h3>
    <h6 className="bold-text">Full-Stack Development</h6>
    <hr/>
      <p>5/01 : Stony Brook </p>
      <p>5/22 : Stony Brook </p>

    <h6 className="bold-text">Contact Admissions</h6>
    <hr/>
      <p>(###)###-####</p>
      <p>(###)###-####</p>

    <h6 className="bold-text">Email US</h6>
    <hr/>
      <p><a href="mailto:admissions@extremecodingschool.com">Enrollment</a></p>
      <p><a href="mailto:admissions@extremecodingschool.com">Student Services</a></p>

      <h6 className="bold-text">Our Mission</h6>
      <hr/>
        <p className="left-text">The mission at Extreme Coding School is to educate students through practice and not just slides or books. We want to train our students to push disciplinary frontiers, confront complex issues and engineer innovative solutions for the grand challenges of our time.</p>

      </div>


      <div className="column-right-side ">
      <h2 className="blue-text bold-text ">Coding Boot Camp Curriculum</h2>
      <img alt="curriculum image" src={curr_img} className="curriculum-image"/>
      <p className="left-text p-width">Here at Extreme Coding School we want to equip you for cintinued success even when
        you graduate as a full-stack developer. We not only cover the most in-demand skills for full-stack development,
        we also provide you with a solid foundation in Data-Structures and Algorithms.
        </p>
      <hr/>

        






        </div>

      </div>

      </div>




);

export default Curriculum;
