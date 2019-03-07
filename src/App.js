import React, { Component } from 'react';
import './App.css';
import ApplyForm from './components/ApplyForm'
import Home from './components/Home'
import Curriculum from './components/Curriculum'
import Requirements from './components/Requirements'
import Pricing from './components/Pricing'
import Program from './components/Program'
import Privacy from './components/Privacy'
import FAQ from './components/FAQ'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Switch, Route, withRouter} from 'react-router-dom'
import logo from './images/code-image.png'

class App extends Component {


  render() {
    return (
      <div >
      <div className="middle-div">
      <div className="body-content">

        <div className = "logo-div">
          <div>
            <img src={logo} className="logo-image" alt="logo"/><span className="logo-text"> Extreme | Coding | School </span>
          </div>
        </div>

        <Navbar/>
        <Switch>
          <Route path="/faq" render={()=><FAQ/>}/>
          <Route path="/privacy" render={()=><Privacy/>}/>
          <Route path="/program" render={()=><Program/>}/>
          <Route path="/requirements" render={()=><Requirements/>}/>
          <Route path="/pricing" render={()=><Pricing/>}/>
          <Route path="/curriculum" render={()=><Curriculum/>}/>
          <Route path="/apply" render={()=><ApplyForm/>}/>
          <Route path="/" render={()=><Home/>}/>
        </Switch>
      </div>
      </div>
      <Footer/>
      </div>
    )
  }
}

export default withRouter(App);
