import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark color-dark-blue outside-margin">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-333"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link bold-font" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bold-font"  href="/curriculum">
                Curriculum
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bold-font" href="/pricing">
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link bold-font" href="/program">
                Program
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link bold-font" href="/faq">
                FAQ
              </a>
            </li>

            <li className="nav-item">
              <a href="/requirements" className="nav-link bold-font ">Requirements</a>
            </li>

            <li className="nav-item">
              <a href="/apply" className="nav-link bold-font shadow light-green">Apply Now</a>
            </li>


          </ul>
        </div>


      </nav>
    );
  }
}

export default Navbar;
