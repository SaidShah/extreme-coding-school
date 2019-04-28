import React from 'react';
import javaPic from '.././images/adult_education.jpg'
import javaPicTwo from '.././images/computer_class_3.jpg'
import CourseListing from "./CourseListing";

const  Java = () => (
  <div className="course-top-div">
    <h1 className="center-text bold-text">Java: Data Structures & Algorithms</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"25rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
          <strong>You will learn about fundamental data structures, such as lists, stacks, queues and trees, and presents algorithms for inserting, deleting, searching and sorting information on these data structures in an efficient way. Emphasis is put on immediate feedback and on having a fun experience. Programming knowledge is not only useful to be able to program today’s devices such as computers and smartphones. It also opens the door to computational thinking, i.e. the application of computing techniques to every-day processes.</strong></p>
      </div>
    </div>


    <div className="course-div second-course-div" style={{display:"inline-grid"}}>
      <div style={{display:"flex", width:"100%", marginBottom: "2%"}}>
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Skill Level:
            <span className="not-bold-text"> Beginner - Advanced</span>
          </h5>
          <h5 className="bold-text course-padding-btm"> Price:
            <span className="not-bold-text"> $960</span>
          </h5>
        </div>
        <div className="course-double-ul-div course-padding-left">
          <h5 className="bold-text course-padding-btm">Tools:
            <span className="not-bold-text"> A Laptop</span>
          </h5>
          <h5 className="bold-text course-padding-btm">Duration:
            <span className="not-bold-text"> 4 or 8 week track</span>
          </h5>
        </div>
      </div>
      <h5 className="bold-text course-padding-btm">Prerequisite:
        <span className="not-bold-text"> Intro to Java or Code Challenge</span>
      </h5>
    </div>



    <div className="course-div">
      <div className="course-desc-div-two">
        <h4 className="course-ul-title">What you will learn</h4>
        <ul className="course-ul">
          <li className="course-ul">Arrange data on arrays and linked lists using primitive data types and classes.</li>
          <li className="course-ul">Develop and use linear data structures, such as stacks and queues, implemented with linked lists or arrays.</li>
          <li className="course-ul">Develop and use non-linear data structures, such as trees, including binary search trees and heaps, implemented with linked lists or arrays.</li>
          <li className="course-ul">Implement algorithms for the efficient searching and sorting of data.</li>
        </ul>
      </div>
      <div className="course-image-div">
        <img src={javaPicTwo} alt="front end web development extreme coding school" className="course-image"
          style={{width:"25rem", height:"20rem"}}/>
      </div>
    </div>

    <CourseListing
        courseDuration = {"8 Weeks"}
        schedule = {"Monday & Wednesday"}
        courseHours = {"4:00 pm - 8:00 pm"}
        starting = {"June 03, 2019"}
        applyLink = {"/apply/DataStruct8wMW-June"}
        courseName = {"Java Data Structures & Algorithms Mon & Wed"}
    />

    {/*
    <CourseListing
        courseDuration = {"8 Weeks"}
        schedule = {"Tuesday & Thursday"}
        courseHours = {"8:30 am - 11:30 am | 12:30 pm - 3:00 pm"}
        starting = {"May 07, 2019"}
        applyLink = {"/apply/dataStructuresTR"}
        courseName = {"Java Data Structures & Algorithms Tues & Thurs"}
    />
    */}
  </div>
);

export default Java
