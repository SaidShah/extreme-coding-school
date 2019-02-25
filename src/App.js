import React, { Component } from 'react';
import './App.css';
import ApplyForm from './components/ApplyForm'
import Home from './components/Home'
import Curriculum from './components/Curriculum'
import Pricing from './components/Pricing'
import Navbar from './components/Navbar'
import {Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {



  render() {
    return (
      <div>
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
