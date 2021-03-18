import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Auth Project
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signout" className="nav-link">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
