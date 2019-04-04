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
                <div className="header-img-text center-text white-text" style={{display:"inline-grid"}}>
                  <h1 className="bold-text-2 white-text">Long Island's Premier Coding School</h1>
                </div>

                <div className="header-img-text image-box">
                  <h2 className="bold-text-2 white-text header-text">Featured Courses</h2>
                  <div className="row row-div">

                    <div style={{display:"inherit"}}>
                      <div className="column box-border column-desktop">
                        <div>
                          <h5 className="white-letters font-size-1-6">Front-End Web Crash Course</h5>
                          <p className="black-letters font-size-1-5">
                            Learn how to develop professional websites that are
                            adaptive and reactive with HTML5, CSS3, and Javascript.
                            Make use of modern web frameworks including Bootstrap.
                          </p>
                        </div>
                      </div>

                      <div className="column box-border column-desktop">
                        <div>
                          <h5 className="white-letters font-size-1-6">AP Computer Science A</h5>
                          <p className="black-letters font-size-1-5">
                            Pass the AP Computer Science A exam with ease! In our AP course, you will learn all necessary topics
                            immersively in a small class setting that caters to high school students.
                          </p>
                        </div>
                      </div>
                      <div className="column box-border column-desktop">
                        <div>
                          <h5 className="white-letters font-size-1-6">Mini Bootcamp</h5>
                          <p className="black-letters font-size-1-5">
                            Don't have time for the Full Bootcamp but you still want to learn Full-Stack
                            Development?  We offer a Mini-Bootcamp that is lighter and
                            requires less time in the classroom.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="column box-border column-mobile" style={{display:"none"}}>
                      <div>
                        <h5 className="white-letters" style={{fontSize:"155%"}}>What we teach</h5>
                        <p className="black-letters" style={{fontSize:"150%"}}>
                          We offer many courses here at Extreme. Everything from AP Computer Science A
                          to Full-Stack Web Development. Find them with the button below.
                        </p>
                      </div>
                    </div>

                    <a href={'/courses'} className="course-link no-transition">
                      <button className="btn course-btn  btn-info" style={{borderRadius:"0.5rem", marginTop:"10%"}}>
                        All Courses
                      </button>
                    </a>
                  </div>

                </div> {/*header-img-text*/}
              </div> {/*header-table*/}
            </div>
            <div className="padding-after-jumbotron row">




              <div className="column-right-side center-text">
                <div className="column-mid-div">
                  <h2 className="blue-text bold-text home-page-ul-header-h2">
                    Why Extreme
                  </h2>
                  <p className="left-text skills-paragraph" style={{marginTop:"3%"}}>
                    At Extreme, we believe that practical knowledge is valued more
                    than theoretical knowledge. We
                    strive to teach students about what they
                    can do with what tools they have, not about what is simply
                    possible. When we teach, we don't have you sit down and listen to our
                    instructors read from PowerPoint slides for hours on end. We have you follow us
                    with activities and assignments to
                    ensure that you learn, and later have projects to put straight onto your resume to help
                    you get hired later.

                    We want to give back to our community by creating bright students
                    who excel at their craft
                    and make them employable in their field.
                  </p>
                  <div className="skills-ul-div" style={{marginTop:"2%"}}>
                    <ul className="home-page-ul">
                      <li className="home-page-li">
                        Learn skills in computer science that can be applied anywhere.
                      </li>
                      <li className="home-page-li">
                        Create projects to help build your professional portfolio to get ready for employment.
                      </li>
                      <li className="home-page-li">
                        Learn version control with Git through the terminal.
                      </li>
                      <li className="home-page-li">
                        Study part-time while maintaining your work schedule.
                        We also offer accelerated full-time options that will help you achieve your dreams faster.
                      </li>
                      <li className="home-page-li">
                        Get extra help from our instructors to help you navigate through our programs.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="prog-hr-div">
                  <hr className = "hr-mobile-change" style={{minHeight:"5px"}}/>
                </div>

                <div className="programming-container">
                  <div className="row prog-row">
                    <h3 className="blue-text bold-text tablet-home-page-ul-header-h2">
                      Why we're different
                    </h3>
                    <div className="column-left-side-programming">

                      <img src={programming_image} alt="programming" className="program_image"/>
                    </div>

                    <div className="column-right-side-programming">
                      <h3 className="bold-text home-page-ul-header-h3">
                        Why we're different
                      </h3>

                      <p className="left-text skills-paragraph" style={{marginTop:"3%"}}>
                        We started Extreme because we noticed a severe lack in the way universities are teaching Computer Science.
                        Modern businesses are actively looking for individuals who can hit the ground running as soon
                        as they're hired. But Computer Science programs at universities are not preparing their students for this atmosphere.
                        Instead they focus on pure fundamentals and theory but rarely delve into modern applications of what
                        is being taught. We design our courses with this in mind and offer students the best of both worlds; a solid foundation
                        built on theory and modern methods being utilized by todays largest and most rapidly growing businesses. Our courses will
                        have you complete projects that you can proudly show off on your resume to prove that you have the skills businesses
                        are loooking for and the fundamentals to back them up.
                      </p>
                    </div>
                  </div>

                  <div>
                    <hr className="grad-hr" style={{minHeight:"5px", position:"relative", marginBottom:"50px"}}/>
                  </div>

                  <div className="move-up">
                    <h3 className="blue-text bold-text tablet-home-page-ul-header-h2">Who Extreme is for</h3>
                    <div className="grad-row">
                      <div className="column-left-side-graduate">
                        <h3 className="bold-text grad-h3 home-page-ul-header-h3">Who Extreme is for</h3>
                        <p className="left-text skills-paragraph">
                          Extreme teaches in a different way from a conventional school. We keep
                          our students immersed and invested in what they're learning. We've all been
                          through the lecture that lasted 2 hours, so we know that if you're bored you cannot learn.
                          Instead of listening to someone talk for 40 minutes straight and copying down what
                          they're saying, we structure our topics in a way to keep you actively engaged while you code.

                        </p>
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
