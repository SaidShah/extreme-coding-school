import React, { Component } from 'react';
import './App.css';
import ApplyForm from './components/ApplyForm'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {



  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/apply" render={()=><ApplyForm/>}/>
          <Route path="/" render={()=><Home/>}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
