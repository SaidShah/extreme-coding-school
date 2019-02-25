import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark blue">
        <a className="navbar-brand lrg-padding" href="/">
          Navbar
        </a>
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
            <li className="nav-item ">
              <a className="nav-link lrg-padding" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link lrg-padding"  href="/curriculum">
                Curriculum
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link lrg-padding" href="/pricing">
                Pricing
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">

            <a href="/apply" className="white-text shadow green lrg-padding">Apply Now</a>


          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
