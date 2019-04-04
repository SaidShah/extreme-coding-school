import React, { Component } from "react";
import {Link} from 'react-router-dom'

const displayDropdown={
   display:"inline"
}

const hideDropdown={
  display:"none"
}

class Navbar extends Component {
 state = {
  navCollapsed: true,
  dropdown: false
}



_onToggleNav = () => {
  this.setState({ navCollapsed: !this.state.navCollapsed })
}

onDropdown=()=>{
  this.setState({dropdown: !this.state.dropdown})
}

handleClick=()=>{
  this.setState({dropdown: !this.state.dropdown})
}


render() {
  const {navCollapsed} = this.state
  return (

    <nav className="navbar navbar-expand-md sticky navbar-dark color-dark-blue outside-margin">
      <button
        className="navbar-toggler collapsed"
        type="button"
        onClick={this._onToggleNav}
        style={{zIndex:"1000"}}
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link no-transition-nav bold-font" href="/">
              Home
            </a>
          </li>


          <li className="navbar-nav nav-item dropdown">

            <button className="nav-link dropdown-toggle no-transition-nav bold-font dropbtn nav-bc-drop"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={this.onDropdown}>
              Bootcamps
            </button>
            <div className="dropdown-menu dropdown-primary dropdown-content" aria-labelledby="navbarDropdownMenuLink" id="bootcampDropdown" style={this.state.dropdown ? displayDropdown : hideDropdown}>
              <Link id="fullbootcamp" className="dropdown-item" to="/bootcamp/fullBootcamp" onClick={this.handleClick}>Full Bootcamp</Link>
              <Link id="minibootcamp" className="dropdown-item" to="/bootcamp/miniBootcamp" onClick={this.handleClick}>Mini-Bootcamp</Link>
            </div>
          </li>




          <li className="nav-item">
            <a className="nav-link no-transition-nav bold-font" href="/courses">
              Courses
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link no-transition-nav bold-font" href="/about">
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link no-transition-nav bold-font" href="/contactus">
              Contact Us
            </a>
          </li>


        </ul>
        <ul className="navbar-nav nav-mr-apply">
          <li className="nav-item">
            <a href="/apply" className="nav-link no-transition-nav bold-font shadow light-green">Apply Now</a>
          </li>


        </ul>
      </div>


    </nav>
    );
}
}

export default Navbar;
