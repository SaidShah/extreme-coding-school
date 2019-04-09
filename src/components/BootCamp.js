
import React, { Component } from 'react';
import CurriculumSections from './CurriculumSections'
import MiniBootcampCurriculumSections from './MiniBootcampCurriculumSections'
import curr_img from '.././images/person-coding.svg'
import apcs from '.././images/minibootcamp.svg'
import {Link} from 'react-router-dom'
import BootcampMoreInfo from "./BootcampMoreInfo";

class BootCamp extends Component {
  state={
    bootcamp: true,
    showingBootcamp: true
  }

  componentDidMount() {
    let userLocArr= this.props.props.location.pathname.split("/")
    let userCourse = userLocArr[userLocArr.length-1]
    if(userCourse==="fullBootcamp"){
      this.setState({bootcamp: true, showingBootcamp: true})
    }else if(userCourse==="miniBootcamp"){
      this.setState({bootcamp: false, showingBootcamp: false})
    }

    if(document.getElementById("minibootcamp")){
      document.getElementById("minibootcamp").addEventListener("click",this.handleBootcamp)
      document.getElementById("fullbootcamp").addEventListener("click",this.handleMiniBootcamp)
    }

    window.scrollTo(0,0)
  }


  showBootcamp=()=>{
    return (<div>

      <div className="padding-after-jumbotron row center-text">


        <div className="column-right-side ">
          <h2 className="blue-text bold-text" style={{marginBottom:"2%"}}>
            Full Stack Web Development Bootcamp Curriculum
          </h2>
          <img alt="curriculum " src={curr_img} className="curriculum-image" style={{marginBottom:"2%"}}/>
          <p className="bootcamp-p">Here at Extreme Coding School we want to equip you for continued success even when
            you graduate as a full-stack developer. We not only cover the most in-demand skills for full-stack development,
            we also provide you with a solid foundation in Data-Structures and Algorithms.
          </p>
          <p className="bootcamp-p">Our curriculum starts with the back-end then dives into the front-end followed
            by computer science fundamentals like data-structures and algorithms. Most importantly we teach you how to
            learn so you can continue growing your skills in the years to come.
          </p>
          <p className="bootcamp-p">We know that prospective employers care about what you can do,
            and not just what you say you can do,
            so our program is 90% hands on starting from Day 1. During your 15 weeks at Extreme
            Coding School you'll gain a wide set of technical skills, put them in action,
            and complete the program with an array of projects, and an impressive portfolio that will help you land your dream job.
          </p>
          <hr/>
          <CurriculumSections />
          <hr/>
          <BootcampMoreInfo tuition = {"$9000"} schedule = {"This is Schedule"}/>
        </div>

        <div className="course-div second-course-div">
          <div className="course-ul-div">
            <div className="course-double-ul-div course-padding-left">
              <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 weeks</span> </h5>
              <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Saturday & Sunday</span> </h5>
              <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 3:30 pm </span> </h5>
            </div>
            <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 11, 2019</span> </h5>
              <Link to="/apply/BootCamp" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">
                Apply Now Full Stack Coding Bootcamp
              </Link>
            </div>
          </div>
        </div>



      </div>

    </div>)
  }

  showMiniBootcamp=()=>{
    return (<div>

      <div className="padding-after-jumbotron row center-text">


        <div className="column-right-side ">
          <h2 className="blue-text bold-text" style={{marginBottom:"2%"}}>
            Mini-Bootcamp Curriculum
          </h2>
          <img alt="curriculum " src={apcs} className="curriculum-image" style={{marginBottom:"2%"}}/>
          <p className="bootcamp-p">Here at Extreme Coding School we want to equip you for continued success even after
            you graduate as a front-end developer {/*(change?)*/}. Our mini bootcamp is designed with just this in mind. This
            pared down version, covering the first three modules of our full bootcamp offers you the tools and knowledge
            you need to get started on your coding journey. {/*(something bit more specific here?)*/}
          </p>
          <p className="bootcamp-p"> {/*CHANGE*/}Our curriculum starts with the back-end then dives into the front-end
            followed by computer science fundamentals like data-structures and algorithms. Most importantly we teach you
            how to learn so you can continue growing your skills in the years to come.
          </p>
          <p className="bootcamp-p">We believe in an approach that is very hands on, so be prepared to code! During your
            12 weeks at Extreme Coding School you'll develop a wide set of technical skills that you can put into action,
            and begin putting together a portfolio that can help you land your dream job.
          </p>
          <hr/>
          <MiniBootcampCurriculumSections />
          <hr/>
          <BootcampMoreInfo tuition = {"$4900"} schedule = {"This is Schedule"}/>

        </div>

        <div className="course-div second-course-div">
          <div className="course-ul-div">
            <div className="course-double-ul-div course-padding-left">
              <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 weeks</span> </h5>
              <h5 className="bold-text course-padding-btm">Schedule: <span className="not-bold-text"> Saturday & Sunday</span> </h5>
              <h5 className="bold-text course-padding-btm">Hours: <span className="not-bold-text"> 8:30 am - 3:30 pm </span> </h5>
            </div>
            <div className="course-double-ul-div course-padding-left">
              <h5 className="bold-text course-padding-btm">Starting: <span className="not-bold-text"> May 11, 2019</span> </h5>
              <Link to="/apply/bootcampTeens" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">
                Apply Now Mini-Bootcamp
              </Link>
            </div>
          </div>
        </div>


      </div>

    </div>)
  }
  handleBootcamp=()=>{
    if(this.state.bootcamp && this.state.showingBootcamp){
      this.setState({
        bootcamp: !this.state.bootcamp, showingBootcamp: !this.state.showingBootcamp
      })
    }
    window.scrollTo(0,0)
  }

  handleMiniBootcamp=()=>{
    if(!this.state.bootcamp && !this.state.showingBootcamp){
      this.setState({
        bootcamp: !this.state.bootcamp, showingBootcamp: !this.state.showingBootcamp
      })
    }
    window.scrollTo(0,0)
  }

  render() {
    return (
      <>
        <div style={{display:"flex"}}>
          <div className="bootcamp-buttons">
            <button id="bootcampButton" className="btn boot-button" onClick={this.handleMiniBootcamp}>View Full Bootcamp</button>
            <button id="bootcampButton" className="btn boot-button" onClick={this.handleBootcamp}>View Mini-Bootcamp</button>
          </div>
        </div>
        {this.state.showingBootcamp ? this.showBootcamp() : this.showMiniBootcamp()}
      </>
    );
  }

}

export default BootCamp;
