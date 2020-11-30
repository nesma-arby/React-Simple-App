import React, { Component } from "react";
import {Link , NavLink} from 'react-router-dom' ;

class Navbar extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <Link className="navbar-brand" to="/">
             <i className="fas fa-cart-plus"> {this.props.productCount} </i>
          </Link>
          

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

{/* NavLink bi check if the url bi contain el / bs if yes hi bold el link so we sholud put it /home not / only */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home 
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Shoppingcart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
