import React, { Component } from 'react';
import './App.css';
import ApplyForm from './components/ApplyForm'
import Home from './components/Home'
import Curriculum from './components/Curriculum'
import Pricing from './components/Pricing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Switch, Route, withRouter} from 'react-router-dom'
import logo from './images/code-image.png'

class App extends Component {



  render() {
    return (
      <div >
        <div>
          <img src={logo} className="logo-image" alt="logo"/><span className="logo-text"> Extreme | Coding | School </span>
        </div>

        <Navbar/>
        <Switch>
          <Route path="/pricing" render={()=><Pricing/>}/>
          <Route path="/curriculum" render={()=><Curriculum/>}/>
          <Route path="/apply" render={()=><ApplyForm/>}/>
          <Route path="/" render={()=><Home/>}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(App);
