import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="nav-header">
            <div className="logo">
              <h1>fascination</h1>
            </div>
            <div className="main-nav">
              <ul>
                <li>
                  {/* <a href="/Home">home</a> */}
                  <Link to="/Projects">Projects</Link>
                </li>
                <li>
                  {/* <a href="/About">about</a> */}
                  <Link to="/About">About</Link>
                </li>
                <li>
                  {/* <a href="/Card">Skills</a> */}
                  <Link to="/Skills">Skills</Link>
                </li>
                <li>
                  {/* <a href="/Contact">contact me</a> */}
                  <Link to="/Contact">Contact</Link>
                </li>
                <li>
                  {/* <a href="#">resume</a> */}
                  <Link to="/">Resume</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="main-content">
            <div className="intro">
              <h2>
                Hi,This is <span className="color">Mac</span>
              </h2>
              <h4>i'm a front-end developer and this is my Portfolio.</h4>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;
