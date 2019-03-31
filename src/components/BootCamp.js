import React from 'react';
import CurriculumSections from './CurriculumSections'
import curr_img from '.././images/person-coding.png'

const BootCamp = () => (
  <div>

  <div className="padding-after-jumbotron row center-text">


      <div className="column-right-side ">
      <h2 className="blue-text bold-text ">Bootcamp Curriculum</h2>
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
      <hr/>


      <CurriculumSections />
        </div>

      </div>

      </div>




);

export default BootCamp;
