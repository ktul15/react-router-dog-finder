import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    let dogLinks = this.props.dogs.map(dog => (
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          to={`/dogs/${dog.name}`}
          key={dog.name}
        >
          {dog.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#1">
          Dog App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dogs">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
