import React, { Component } from 'react';
import './App.css';
import ApplyForm from './components/ApplyForm'
import Home from './components/Home'
import BootCamp from './components/BootCamp'
import Requirements from './components/Requirements'
import Courses from './components/Courses'
import Program from './components/Program'
import Privacy from './components/Privacy'
import FAQ from './components/FAQ'
import Navbar from './components/Navbar'
import ThankyouPage from './components/ThankyouPage'
import Footer from './components/Footer'
import About from './components/About'
import {Switch, Route, withRouter} from 'react-router-dom'
import logo from './images/ecs-long.svg'

class App extends Component {


  render() {
    return (
      <div >
        <div className="middle-div">
          <div className="body-content">

            <div className = "logo-div">
              <div className="logo-div-2">
                <a className="nav-link no-transition-nav bold-font logo-a" href="/" style={{display:"flex"}}>
                  <div style={{display:"inline-block", margin:"auto", width:"60%"}}>
                    <img src={logo} className="logo-image" alt="logo" />
                  </div>
                </a>
              </div>
            </div>

            <Navbar/>
            <Switch>
              <Route path="/faq" render={()=><FAQ/>}/>
              <Route path="/privacy" render={()=><Privacy/>}/>
              <Route path="/program" render={()=><Program/>}/>
              <Route path="/requirements" render={()=><Requirements/>}/>
              <Route path="/courses" render={()=><Courses/>}/>
              <Route path="/bootcamp" render={()=><BootCamp/>}/>
              <Route path="/apply" render={()=><ApplyForm props={this.props}/>}/>
              <Route path="/about" render={()=><About/>}/>
              <Route path="/thankyou" render={()=><ThankyouPage/>}/>
              <Route path="/" render={()=><Home/>}/>
            </Switch>
          </div>
        </div>
        <Footer style={{bottom:"0"}}/>
      </div>
    )
  }
}

export default withRouter(App);
