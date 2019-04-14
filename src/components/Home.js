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
                    This school is the fruit of many years’ preparation.
                    As a Computer Science professor and full-stack software developers, we always wanted to create a place for people of all ages in the community to learn the craft of computer programming. And we had a few ideas in mind.
                    First, we don’t want math, science, or even age to be a barrier — Any interested person could come to learn and enjoy.
                    We would also like to keep pace with new trends and emerging technologies in the classroom. We want students to learn not just from a Computer Science professor but also from working programmers.
                    Finally, in addition to coding skills, we would like to foster a few other intangibles — confidence, enjoyment, intention, and integrity.
                    Our school motto is “Freedom through Practice.”  We believe that having a system to learn, practice, and solve problems hands-on is more productive than setting up a goal of, say, getting a high paying IT job in two months.
                    So that’s it. Come to meet with us in our place. We’ll be delighted.
                  </p>

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
                          While the traditional Computer Science education has tremendous intellectual
                          benefits, it nonetheless has an unfortunate tendency to overlook practical
                          programming skills in favor of theories. Theories such as the Cook-Levin theorem
                          are beautiful and fascinating, but they do not directly relate to what most programmers do most of the time.
                          <br/><br/>We focus more on practical skills and use technologies that are currently in demand.
                          Upon graduation, you will not only gain a Certificate of Completion but also a portfolio of projects
                          that proves your skills.
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
                            Our bootcamps are for people interested in career changes. If you are in this category, you
                            most likely have completed your college or even graduate education but are not satisfied with
                            your current employment prospects.  By taking an intensive and immersive bootcamp, you hope
                            to break into the high-paying web development industry.

                            We also offer shorter, less intensive courses to allow people to learn specific parts of the
                            full stack technologies. It could be either front-end or back-end. It could be either HTML,
                            CSS, and JavaScript, or React, Redux, and Bootstrap.  It could be either Programming in general
                            or Data Structures and Algorithms. No matter what you choose, our focus is the same:
                            It is to better your understanding of Computer Science theories and nurture your practical
                            skills through project-centered problem-solving.

                            In addition, we offer a course that prepares high school students for their AP Computer
                            Science A exam.  As a high school student, you may choose to set aside a few hours a week
                            when school is in session, or a few days a week in the summer to study the entire set of
                            topics required by its curriculum. Regardless what you choose, we will accommodate you in
                            this journey.
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
