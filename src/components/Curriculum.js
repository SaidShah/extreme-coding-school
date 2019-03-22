import React from 'react';
import CurriculumSections from './CurriculumSections'
import SideBar from './SideBar'
import schedule from '.././images/mock-schedule.svg'

const Curriculum = () => (
  <div>
    <div style={{display:"grid"}}>
      <h id="fade-in" style={{textAlign:"center", marginTop:"4%", marginBottom: "5%", fontSize:"2.7rem"}}>This is our schedule.</h>
      <img src={schedule} className="schedule-image"/>

      <p style={{width:"70%", textAlign: "center", margin:"auto", marginTop: "5%", fontSize: "1.3rem"}}>
        Here at Extreme, we offer many different courses for our students to choose from. We have everything
        from the Full-Stack development course like Boot Camp to learn everything
        you need to get a job in web development, or a smoother, and lighter,
        Front End course that allows students to learn about the basics of web design.
      </p>

      <h2 style={{textAlign:"center", marginTop: "3%"}}> (Here's a more in-depth look at what we offer.)</h2>

    </div>
  </div>
);

export default Curriculum;


{/*
  <div className="padding-after-jumbotron row">

    <SideBar></SideBar>

    <div className="column-right-side ">
      <div>
        <h2 className="blue-text bold-text ">Extreme Coding School Curriculum</h2>
        <img alt="curriculum " src={curr_img} className="curriculum-image"/>

        <p className="left-text p-width cirr-text">Here at Extreme Coding School we want to equip you for cintinued success even when
          you graduate as a full-stack developer. We not only cover the most in-demand skills for full-stack development,
          we also provide you with a solid foundation in Data-Structures and Algorithms.
        </p>
        <p className="left-text p-width cirr-text">Our curriculum starts with the back-end then dives into the front-end followed
          by computer science fundamentals like data-structures and algorithms. Most importantly we teach you how to
          learn so you can continue growing your skills in the years to come.
        </p>
        <p className="left-text p-width cirr-text">We know that prospective employers care about what you can do, and not just what you say you can do, so our program is 90% hands on starting from Day 1. During your 15 weeks at Extreme Coding School you'll gain a wide set of technical skills, put them in action, and complete the program with an array of projects, and an impressive portfolio that will help you land your dream job.
        </p>
      </div>

      <hr/>


      <CurriculumSections />
    </div>

  </div>
*/}
