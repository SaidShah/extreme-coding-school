import React, { Component } from 'react';
import image_one from '.././images/jumbotron-img-one.jpg'
import image_two from '.././images/jumbotron-img-two.jpg'
import image_three from '.././images/jumbotron-img-three.jpg'
import image_four from '.././images/jumbotron-img-four.jpg'
import programming_image from '.././images/programming-image.jpg'
import graduate_image from '.././images/graduate.jpg'
import SideBar from './SideBar'

class Home extends Component {

  getImages=()=>{
     let images=[image_one,image_two,image_three,image_four]
     let index = 0;

     setInterval(function(){
       index++;
       index %= images.length;
       document.getElementById("jumbo-image-home").src = images[index];

     },5000)
  }

 render() {
  return (
          <div>

            <div className="header-img-container center-text">

              {this.getImages()}
              <img src={image_one} id="jumbo-image-home" alt="jumbotron " className="jumbo-image"/>

              <div className="header-table">
                <div className="header-img-text center-text white-text">
                  <h1 className="bold-text-3 white-text">Extreme Coding School</h1>
                  <h2 className="bold-text-2 white-text">Become a developer in 12 weeks</h2>
                </div>

                <div className="header-img-text image-box">
                  <h2 className="bold-text-2 white-text header-text">Featured Languages</h2>
                  <div className="row row-div">

                    <div className="column box-border">
                      <div>
                        <h5 className="white-letters font-size-1-5">HTML & CSS</h5>
                        <p className="black-letters font-size-1-3">Build projects as you dive into detail about how the browser works and what exactly the source code comprising a web page does.</p>
                      </div>
                    </div>

                    <div className="column box-border">
                      <div>
                        <h5 className="white-letters font-size-1-5">JavaScript</h5>
                        <p className="black-letters font-size-1-3">Consume RESTful API's, Parse JSON to extract data, use AJAX to update data on a website in real time, get comfortable with event handlers, etc...</p>
                      </div>
                    </div>
                    <div className="column box-border">
                      <div className="featured-phone-fix">
                       <h5 className="white-letters font-size-1-5">Ruby & Rails</h5>
                        <p className="ruby-text-2 font-size-2" style={{display:"none"}}> Our curriculum is based on todays most in-demand skills. You will gain extensive knowledge in Ruby, JavaScript, React, Rails, Data Structures and Algorithms</p>
                       <p className="black-letters font-size-1-3" id="ruby-text">Learn Basic + Intermediate Ruby,Test-Driven Development,
                       ActiveRecord, Database Queries, Joins, Schema Design, etc... </p>
                      </div>
                    </div>
                    <div className="column box-border">
                      <div>
                        <h5 className="white-letters font-size-1-5">Algorithms</h5>
                        <p className="black-letters font-size-1-3">Practice computer science fundamentals, Learn which data structures to use for specific problems,
                        Learn most efficient search and sort algorithms, etc...</p>
                      </div>
                    </div>
                  </div>

                </div> {/*header-img-text*/}
              </div> {/*header-table*/}
            </div>
            <div className="padding-after-jumbotron row">


              <SideBar> </SideBar>


              <div className="column-right-side center-text">
                <div>
                  <h2 className="blue-text bold-text home-page-ul-header-h2">Gain In-Demand Skills at Extreme</h2>
                  <p className="left-text skills-paragraph">Extreme Coding School equips you with the skills to succeed in today's computerized world. We at Extreme equip you with essential skills for today’s digital economy. With strategically engineered curricula, face-to-face interaction, and knowledgeable instructors, we provide an educational experience that will help you find a path to success.
                  </p>
                  <div className="skills-ul-div">
                      <ul className="home-page-ul">
                        <li className="home-page-li">Get a full time position as a Web Developer or Software Engineer with our job placement assistance.</li>
                        <li className="home-page-li">Use Git to build a portfolio of projects and applications in our Web Development program.</li>
                        <li className="home-page-li">Build an online portfolio to show off and demo your projects for prospective employers.</li>
                        <li className="home-page-li">Study part-time while maintaining your work schedule. Accelerated full-time options will help you achieve your dreams faster.</li>
                        <li className="home-page-li">Get extra help from our instructors to help you navigate through the program.</li>
                        <li className="home-page-li">Build an incredible resume to show off your technical abilities.</li>

                      </ul>
                  </div>
                </div>
                <div className="prog-hr-div">
                <hr className = "hr-mobile-change" style={{minHeight:"5px"}}/>
                </div>

                <div className="programming-container">
                  <div className="row prog-row">
                    <h3 className="blue-text bold-text tablet-home-page-ul-header-h2">What You Will Learn at Extreme</h3>
                    <div className="column-left-side-programming">

                      <img src={programming_image} alt="programming" className="program_image"/>
                    </div>

                    <div className="column-right-side-programming">

                      <ul className="home-page-ul" style={{position:"relative"}}>
                        <h3 className="bold-text home-page-ul-header-h3">What You Will Learn at Extreme</h3>
                        <li className="home-page-li">Learn the most in-demand skills like HTML, CSS, Bootstrap, JavaScript, Ruby, React, etc...</li>
                        <li className="home-page-li">Learn the most used Databases like Postgres, MySQL, etc..</li>
                        <li className="home-page-li">Learn GIT commits, pushing, pulling, branching, etc...</li>
                        <li className="home-page-li">Learn agile principles and methods through building projects from end-to-end</li>
                        <li className="home-page-li">Learn how to build a tech resume, so you can put your best foot forward</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                  <hr className="grad-hr" style={{minHeight:"5px", position:"relative", marginBottom:"50px"}}/>
                  </div>

                  <div className="move-up">
                    <h3 className="blue-text bold-text tablet-home-page-ul-header-h2">What You Recieve After Graduation</h3>
                    <div className="grad-row">
                      <div className="column-left-side-graduate">
                        <ul className="home-page-ul-grad" style={{position:"relative"}}>
                          <h3 className="bold-text grad-h3 home-page-ul-header-h3" style={{marginBotton:"30px"}}>What You Receive After Graduation</h3>
                          <li className="home-page-li">Award showcasing your accomplishment to future employers.</li>
                          <li className="home-page-li">Continued Job Placement Assistance and one-on-one career coaching</li>
                          <li className="home-page-li">A Robust portfolio of projects</li>
                          <li className="home-page-li">A variety of training applicable to many developer roles</li>
                        </ul>
                      </div>

                      <div className="column-right-side-graduate">
                        <img src={graduate_image} alt="programming" className="graduate_image"/>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
    );
  }

}

export default Home;
