import React, { Component } from 'react';
import image_one from '.././images/jumbotron-img-one.jpg'
import image_two from '.././images/jumbotron-img-two.jpg'
import image_three from '.././images/jumbotron-img-three.jpg'
import image_four from '.././images/jumbotron-img-four.jpg'
import programming_image from '.././images/programming-image.jpg'
import graduate_image from '.././images/graduate.jpg'

class Home extends Component {

  frontEndClicked=()=>{
    this.props.props.history.push("/courses/frontEnd")
  }

  apcsClicked=()=>{
    this.props.props.history.push("/courses/apcs")
  }

  miniBootcampClicked=()=>{
    this.props.props.history.push("/bootcamp/miniBootcamp")
  }



  getImages=()=>{
     let images=[image_one,image_two,image_three,image_four]
     let index = 0;

     setInterval(function(){
       index++;
       index %= images.length;
       if(document.getElementById("jumbo-image-home")){
       document.getElementById("jumbo-image-home").src = images[index];
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
                  <h1 className="bold-text-2 white-text">Long Island's Premier Coding School</h1>
                </div>

                <div className="header-img-text image-box">
                  <h2 className="bold-text-2 white-text header-text">Featured Courses</h2>
                  <div className="row row-div">

                    <div style={{display:"inherit"}}>
                      <div className="column box-border column-desktop" onClick={this.frontEndClicked}>
                        <div>
                          <h5 className="white-letters font-size-1-6">Front-End Development</h5>
                          <p className="black-letters font-size-1-5">
                            Learn how to develop professional and adaptive websites
                            with HTML5, CSS3, and JavaScript.
                            Make use of modern web frameworks and libraries such as Bootstrap, React, and Redux.
                          </p>
                        </div>
                      </div>

                      <div className="column box-border column-desktop" onClick={this.apcsClicked}>
                        <div>
                          <h5 className="white-letters font-size-1-6">AP Computer Science A</h5>
                          <p className="black-letters font-size-1-5">
                            Ace the AP Computer Science A exam with ease! In our AP course, you will
                            learn all necessary topics at your own pace in a small, immersive, and personal
                            class setting. We will pay for your AP exam fee too.
                          </p>
                        </div>
                      </div>
                      <div className="column box-border column-desktop" onClick={this.miniBootcampClicked}>
                        <div>
                          <h5 className="white-letters font-size-1-6">Mini-Bootcamp</h5>
                          <p className="black-letters font-size-1-5">
                            Don't have time for the Full Bootcamp but you still want to learn Full-Stack
                            Development?  Consider our Mini-Bootcamp. It’s lighter and requires less time in the classroom.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="column box-border column-mobile" style={{display:"none"}}>
                      <div>
                        <h5 className="white-letters">What we teach</h5>
                        <p className="black-letters">
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
            <div className="padding-after-jumbotron">




              <div className="column-right-side center-text">
                <div className="column-mid-div">
                  <h2 className="blu-text bold-text home-page-ul-header-h2">
                    Why Extreme
                  </h2>
                  <p className="left-text skills-paragraph " style={{marginTop:"3%"}}>
                    We believe that practical skills are just as valuable as a theoretical foundation. We emphasize
                    clean, scalable code. We teach technologies currently used in the industry.
                    We value immersive, hands-on practice over passive lecturing. After each course or each segment, you
                    will be well versed in the tools that today's businesses are using and you will have a portfolio of
                    projects to show for it.
                  </p>
                  <div className="skills-ul-div" style={{marginTop:"2%"}}>
                    <ul className="home-page-ul">
                      <li className="home-page-li">
                        Learn skills in computer science that can be applied anywhere
                      </li>

                      <li className="home-page-li">
                        Create projects to help build your professional portfolio to get ready for employment
                      </li>

                      <li className="home-page-li">
                        Learn version control with Git through the terminal
                      </li>

                      <li className="home-page-li">
                        Study part-time while maintaining your work schedule
                      </li>

                      <li className="home-page-li">
                        We also offer accelerated full-time options that will help you achieve your dreams faster
                      </li>

                      <li className="home-page-li">
                        Get extra help from our instructors to help you navigate through our programs
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="prog-hr-div">
                  <hr className = "hr-mobile-change" style={{minHeight:"5px"}}/>
                </div>

                <div className="programming-container">
                  <div className="row prog-row">
                    <h3 className="blu-text bold-text home-page-ul-header-h2">
                      How we're different
                    </h3>

                    <div className="home-para-div" style={{display:"flex", margin:"auto"}}>
                      <div className="column-left-side-programming">

                        <img src={programming_image} alt="programming" className="program_image"/>
                      </div>

                      <div className="home-spacer-div"></div>

                      <div className="column-right-side-programming">

                        <p className="left-text skills-paragraph right-skills-p">
                          We started Extreme because we noticed a deficit in the way universities are teaching Computer Science.
                          Modern businesses are actively looking for individuals who can hit the ground running as soon
                          as they're hired. But universities are not properly preparing their students for this atmosphere.
                          Instead, they focus on pure fundamentals and theory but rarely delve into modern applications of what
                          is being taught. We design our courses with this in mind and offer students the best of both worlds; a solid foundation
                          built on theory and modern methods being utilized by today's largest and most rapidly growing businesses. Our courses will
                          have you complete projects that you can proudly show off on your résumé to prove that you have the skills businesses
                          are looking for and the fundamentals to back them up.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="prog-hr-div" >
                    <hr className="hr-mobile-change" style={{minHeight:"5px"}}/>
                  </div>

                  <div className="move-up">
                    <div className="grad-row">
                      <h3 className="blu-text bold-text grad-h3 home-page-ul-header-h2">Who Extreme is for</h3>
                      <div className="home-para-div" style={{display:"flex", margin:"auto"}}>
                        <div className="column-left-side-graduate">

                          <p className="left-text skills-paragraph left-skills-p">
                            If you're looking to learn the skills needed to be considered a full-stack developer,
                            then Extreme is for you. Whether you want to finish our program as fast as possible or
                            have a busy schedule that prevents you from committing a myriad of hours per week; we accommodate
                            for both with our main bootcamp and a mini-bootcamp. Or maybe you're looking to learn just one
                            or a few of the courses that we offer. For that, we have you covered as we offer what
                            makes up our bootcamps as individual courses so you can learn exactly what you need and nothing else.
                            If you're a high school student -- or the parent of one -- we are excited to inform you that
                            we also have an AP Computer Science curriculum. We offer APCS tutoring sessions as well as
                            the full course. If you take our APCS course, we will cover the cost of the exam for you.
                          </p>
                        </div>

                        <div className="home-spacer-div" style={{width:"10%"}}></div>

                        <div className="column-right-side-graduate">
                          <img src={graduate_image} alt="programming" className="graduate_image"/>
                        </div>
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
