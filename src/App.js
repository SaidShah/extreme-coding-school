import React, { Component } from 'react';
import './App.css';
import ApplyForm from './components/ApplyForm'
import Home from './components/Home'
import Curriculum from './components/Curriculum'
import Pricing from './components/Pricing'
import Navbar from './components/Navbar'
import {Switch, Route, withRouter} from 'react-router-dom'
import logo from './images/code-image.png'

class App extends Component {



  render() {
    return (
      <div >

        <div className="row">
            <div className="column logo-img-margin"><img src={logo} className="logo-image" alt="logo"/></div>
            <div className="column logo-text"><h4> Extreme | Coding | School </h4></div>
        </div>

        <Navbar/>
        <Switch>
          <Route path="/pricing" render={()=><Pricing/>}/>
          <Route path="/curriculum" render={()=><Curriculum/>}/>
          <Route path="/apply" render={()=><ApplyForm/>}/>
          <Route path="/" render={()=><Home/>}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
