
import React, { Component } from 'react';
import CurriculumSections from './CurriculumSections'
import MiniBootcampCurriculumSections from './MiniBootcampCurriculumSections'
import curr_img from '.././images/person-coding.svg'
import apcs from '.././images/apcs.svg'
import {Link} from 'react-router-dom'

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
  }

  showBootcamp=()=>{
    return (<div>

      <div className="padding-after-jumbotron row center-text">


        <div className="column-right-side ">
          <h2 className="blue-text bold-text ">Bootcamp Curriculum</h2>
          <img alt="curriculum " src={curr_img} className="curriculum-image"/>
          <p className="left-text p-width cirr-text">Here at Extreme Coding School we want to equip you for continued success even when
            you graduate as a full-stack developer. We not only cover the most in-demand skills for full-stack development,
            we also provide you with a solid foundation in Data-Structures and Algorithms.
          </p>
          <p className="left-text p-width cirr-text">Our curriculum starts with the back-end then dives into the front-end followed
            by computer science fundamentals like data-structures and algorithms. Most importantly we teach you how to
            learn so you can continue growing your skills in the years to come.
          </p>
          <p className="left-text p-width cirr-text">We know that prospective employers care about what you can do,
            and not just what you say you can do,
            so our program is 90% hands on starting from Day 1. During your 15 weeks at Extreme
            Coding School you'll gain a wide set of technical skills, put them in action,
            and complete the program with an array of projects, and an impressive portfolio that will help you land your dream job.
          </p>
          <hr/>


          <CurriculumSections />
        </div>
        <Link to="/apply/BootCamp" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">
          Apply Now Full Stack Coding Bootcamp
        </Link>

      </div>

    </div>)
  }

  showMiniBootcamp=()=>{
    return (<div>

      <div className="padding-after-jumbotron row center-text">


        <div className="column-right-side ">
          <h2 className="blue-text bold-text ">Mini-Bootcamp Curriculum</h2>
          <img alt="curriculum " src={apcs} className="curriculum-image"/>
          <p className="left-text p-width cirr-text">Here at Extreme Coding School we want to equip you for continued success even when
            you graduate as a full-stack developer. We not only cover the most in-demand skills for full-stack development,
            we also provide you with a solid foundation in Data-Structures and Algorithms.
          </p>
          <p className="left-text p-width cirr-text">Our curriculum starts with the back-end then dives into the front-end followed
            by computer science fundamentals like data-structures and algorithms. Most importantly we teach you how to
            learn so you can continue growing your skills in the years to come.
          </p>
          <p className="left-text p-width cirr-text">We know that prospective employers care about what you can do,
            and not just what you say you can do,
            so our program is 90% hands on starting from Day 1. During your 15 weeks at
            Extreme Coding School you'll gain a wide set of technical skills, put them in action,
            and complete the program with an array of projects,
            and an impressive portfolio that will help you land your dream job.
          </p>
          <hr/>


          <MiniBootcampCurriculumSections />
        </div>
        <Link to="/apply/bootcampTeens" className="nav-link no-transition-nav bold-font shadow light-green apply-now-size">Apply Now Mini-Bootcamp</Link>

      </div>

    </div>)
  }
  handleBootcamp=()=>{
    if(this.state.bootcamp && this.state.showingBootcamp){
      this.setState({
        bootcamp: !this.state.bootcamp, showingBootcamp: !this.state.showingBootcamp
      })
    }
  }

  handleMiniBootcamp=()=>{
    if(!this.state.bootcamp && !this.state.showingBootcamp){
      this.setState({
        bootcamp: !this.state.bootcamp, showingBootcamp: !this.state.showingBootcamp
      })
    }
  }

  render() {
    return (
      <>
        <div style={{display:"flex"}}>
          <div style={{width:"fit-content", margin:"auto"}}>
            <button id="bootcampButton" className="btn boot-button" onClick={this.handleMiniBootcamp}>View Full Bootcamp</button>
            <button id="bootcampButton" className="btn boot-button" onClick={this.handleBootcamp}>View Mini-Bootcamp</button>
          </div>
        </div>
        {this.state.bootcamp ? this.showBootcamp() : this.showMiniBootcamp()}
      </>
    );
  }

}

export default BootCamp;
