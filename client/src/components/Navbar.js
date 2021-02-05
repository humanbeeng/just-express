import React, { Component } from "react";
import {connect} from 'react-redux'

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="localhost:3000/">
            <h3 className="websiteFont">JustExpress !</h3>
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="ThymeNavbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/browse">
              <p className="websiteFont" style={{ font: "40px" }}>
                browse.
              </p>
            </a>

            <a className="navbar-item" href="/about-us">
              <p className="websiteFont" style={{ font: "40px" }}>
                about us.
              </p>
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-black">
                <p className="websiteFont">Sign up</p>
              </a>
              <a className="button is-light" href="/auth/google">
                <p className="websiteFont">Login</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

mapStateToProps = (state) =>{
  return {auth : state.auth}
}

export default connect(mapStateToProps) (Navbar);
