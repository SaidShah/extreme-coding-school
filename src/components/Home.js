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
                          We observe that, while the traditional Computer Science education has tremendous intellectual
                          benefits, it nonetheless has a deep-rooted deficiency. There is a tendency to overlook practical
                          programming skills over theories.  While Computer Science theories, such as the Cook-Levin theorem,
                          are beautiful and fascinating, they do not directly relate to what most programmers do most of the time.
                          In fact, they tend to effectively prevent Computer Science students from learning practical
                          programming skills most needed in businesses. We design our courses with this in mind. We
                          emphasize practical skills as well as Data Structures and Algorithms. We keep our eyes on
                          technologies currently in demand in the web development industry.  Upon completion, we furnish
                          you with a portfolio of projects demonstrating what you’ve accomplished rather than a
                          transcript showing what courses you’ve taken.
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
                            Our bootcamps are for students interested in career changes. These students have often
                            completed their college or even graduate education but are not satisfied with their current
                            employment prospects.  By taking an intensive and immersive bootcamp, they hope to break into
                            the high-paying web development industry.

                            We also offer shorter, less intensive courses to allow people to learn specific parts of the
                            full stack technologies. It could be either front-end or back-end. It could be either HTML,
                            CSS, and JavaScript, or React, Redux, and Bootstrap.  It could be either Programming in general
                            or Data Structures and Algorithms. No matter what you choose, our focus is the same: It is to
                            better your understanding of Computer Science theories and nurture your practical skills through
                            project-centered problem-solving.

                            In addition, we offer a course that prepares high school students for their AP Computer
                            Science A exam.  A student may choose to set aside a few hours a week when school is in
                            session, or even a few days a week in the summer to study the entire set of topics required
                            by its curriculum. Regardless what you choose, we will accommodate you in this journey.
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
