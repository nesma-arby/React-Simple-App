import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Ourteam from "./Ourteam";
import Ourcompany from "./Ourcompany";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign:"center" , fontSize:"30px" , margin:"30px" }}>About </h2>

        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                <Link to="/about/ourteam">Our Team </Link>{" "}
              </li>
              <li>
                <Link to="/about/ourcompany"> Our Company </Link>{" "}
              </li>
            </ul>
          </div>

          <div className="col">
            <Route path="/about/ourteam" component={Ourteam} />
            <Route path="/about/ourcompany" component={Ourcompany} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
