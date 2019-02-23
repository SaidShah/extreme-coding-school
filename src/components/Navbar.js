import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/curriculum">
                Curriculum
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/price">
                Pricing
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">

            <a href="/apply">
            <li className="nav-item dropdown fas fa-user-alt white-text" ></li></a>


          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
