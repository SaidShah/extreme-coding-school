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
import Chinese from './components/Chinese'
import Footer from './components/Footer'
import About from './components/About'
import ContactUs from './components/ContactUs'
import {Switch, Route, withRouter} from 'react-router-dom'
import logo from './images/ecs-long-ns.svg'

class App extends Component {
  state={
    trigger: false
  }


  render() {
    return (
      <div >
        <div className="middle-div">
          <div className="body-content">

            <div className = "logo-div">
              <a className="nav-link no-transition-nav bold-font logo-a" href="/" style={{margin:"auto"}}>
                <img src={logo} className="logo-image logo-image-1" alt="logo" />
                <img src={logo} className="logo-image logo-image-2" alt="logo" />
              </a>
            </div>

            <Navbar/>
            <Switch>
              <Route path="/faq" render={()=><FAQ/>}/>
              <Route path="/privacy" render={()=><Privacy/>}/>
              <Route path="/program" render={()=><Program/>}/>
              <Route path="/requirements" render={()=><Requirements/>}/>
              <Route path="/courses" render={()=><Courses/>}/>
              <Route path="/bootcamp" render={()=><BootCamp props={this.props}/>}/>
              <Route path="/apply" render={()=><ApplyForm props={this.props}/>}/>
              <Route path="/about" render={()=><About/>}/>
              <Route path="/thankyou" render={()=><ThankyouPage/>}/>
              <Route path="/contactus" render={()=><ContactUs/>}/>
              <Route path="/chinese" render={()=><Chinese/>}/>
              <Route path="/" render={()=><Home props={this.props}/>}/>
            </Switch>
          </div>
        </div>
        <Footer style={{bottom:"0"}}/>
      </div>
    )
  }
}

export default withRouter(App);
