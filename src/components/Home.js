import React, { Component } from 'react';
import image_one from '.././images/jumbotron-img-one.jpg'
import image_two from '.././images/jumbotron-img-two.jpg'
import image_three from '.././images/jumbotron-img-three.jpg'
import image_four from '.././images/jumbotron-img-four.jpg'
import programming_image from '.././images/programming-image.jpg'
import graduate_image from '.././images/graduate.jpg'

class Home extends Component {

  getImages=()=>{
   let images=[image_one,image_two,image_three,image_four]
   let index = 0;

   setInterval(function(){
     if(index >= 3){
       index = 0

       document.getElementById("jumbo-image-home").src = images[index]
     }else {
       index++
       document.getElementById("jumbo-image-home").src = images[index]

     }

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
                  <h1 className="bold-text white-text">Extreme Coding School</h1>
                  <h2 className="bold-text white-text">Become a developer in 12 weeks</h2>
                </div>

                <div className="header-img-text image-box">
                  <h2 className="bold-text white-text">Featured Languages</h2>
                  <div className="row row-div">
                    <div className="column box-border">
                      <h5 className="white-letters">HTML & CSS</h5>
                      <p className="black-letters">Build projects as you dive into detail about how the browser works and what exactly the source code comprising a web page does.</p>
                    </div>

                    <div className="column box-border">
                      <h5 className="white-letters">JavaScript</h5>
                      <p className="black-letters">Consume RESTful API's, Parse JSON to extract data, use AJAX to update data on a website in real time, get comfortable with event handlers, etc...</p>
                    </div>
                    <div className="column box-border">
                      <h5 className="white-letters">Ruby & Rails</h5>
                      <p className="black-letters" id="ruby-text">Learn Basic + Intermediate Ruby,Test-Driven Development,
                      ActiveRecord, Database Queries, Joins, Schema Design, etc... </p>
                    </div>
                    <div className="column box-border">
                      <h5 className="white-letters">Algorithms</h5>
                      <p className="black-letters">Practice computer science fundamentals, Learn which data structures to use for specific problems,
                      Learn most efficient search and sort algorithms, etc...</p>
                    </div>
                  </div>

                </div> {/*header-img-text*/}
              </div> {/*header-table*/}
            </div>
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


              <div className="column-right-side center-text">
                <h2 className="blue-text bold-text ">Gain In-Demand Skills at Extreme</h2>
                <p className="left-text">Extreme Coding School equips you with the skills to succeed in todays computerized world. We at Extreme equip you with essential skills for today’s digital economy. With strategically engineered curricula, face-to-face interaction, and knowledgeable instructors, we provide an educational experience that will help you find a path to success.
                </p>

                <ul className="home-page-ul">
                  <li className="home-page-li">Get a full time position as a Web Developer or Software Engineer with our job placement assistance.</li>
                  <li className="home-page-li">Use Git to build a portfolio of projects and applications in our Web Development program.</li>
                  <li className="home-page-li">Build an online portfolio to show off and demo your projects for perspective employers.</li>
                  <li className="home-page-li">Study part-time while maintaining your work schedule. Accelerated full-time options will help you achieve your dreams faster.</li>
                  <li className="home-page-li">Get extra help from our instructors to help you navigate through the program.</li>
                  <li className="home-page-li">Build an incredible resume to show off your technical abilities.</li>

                </ul>

                <div>
                <hr style={{minHeight:"5px"}}/>
                </div>

                <div className="programming-container">
                  <div className="row prog-row">
                    <div className="column-left-side-programming">
                      <img src={programming_image} alt="programming" className="program_image"/>
                    </div>


                    <div className="column-right-side-programming">
                      <h3 className="bold-text">What You Will Learn at Extreme</h3>
                      <ul className="home-page-ul">
                        <li className="home-page-li-programming">Learn the most in-demand skills like HTML, CSS, Bootstrap, JavaScript, Ruby, React, etc...</li>
                        <li className="home-page-li-programming">Learn the most used Databases like Postgres, MySQL, etc..</li>
                        <li className="home-page-li-programming">Learn GIT commits, pushing, pulling, branching, etc...</li>
                        <li className="home-page-li-programming">Learn agile principles and methods through building projects from end-to-end</li>
                        <li className="home-page-li-programming">Learn how to build a tech resume, so you can put your best foot forward</li>
                      </ul> 
                    </div>
                  </div>

                  <div>
                  <hr style={{minHeight:"5px"}}/>
                  </div>

                  <div className="move-up">
                    
                    <div className="row">
                      <div className="column-left-side-graduate">
                        <h3 className="bold-text">What You Receive After Graduation</h3>
                        <ul className="home-page-ul">
                          <li className="home-page-li-graduate">Award showcasing your accomplishment to future employers.</li>
                          <li className="home-page-li-graduate">Continued Job Placement Assistance and one-on-one career coaching</li>
                          <li className="home-page-li-graduate">A Robust portfolio of projects</li>
                          <li className="home-page-li-graduate">A variety of training applicable to many developer roles</li>

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
