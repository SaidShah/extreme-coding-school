import React, { Component } from "react";



class Navbar extends Component {
 state = {
  navCollapsed: true
}

_onToggleNav = () => {
  this.setState({ navCollapsed: !this.state.navCollapsed })
}

render() {
  const {navCollapsed} = this.state
  return (

    <nav className="mb-1 navbar navbar-expand-md sticky navbar-dark color-dark-blue outside-margin">
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
          <li className="nav-item">
           <a className="nav-link no-transition-nav bold-font"  href="/bootcamp">
          Bootcamp
            </a>
          </li>
          <li className="nav-item">
           <a className="nav-link no-transition-nav bold-font" href="/courses">
          Courses
           </a>
          </li>

          <li className="nav-item">
            <a className="nav-link no-transition-nav bold-font" href="/faq">
          FAQ
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link no-transition-nav bold-font" href="/about">
          About Us
            </a>
          </li>

          <li className="nav-item">
            <a href="/requirements" className="nav-link no-transition-nav bold-font ">Requirements</a>
          </li>

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
