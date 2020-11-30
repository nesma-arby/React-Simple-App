import React, { Component } from "react";
import Joi  from 'joi-browser'; // library for validation


class Login extends Component {


  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
  }
  

  schema = {
      username: Joi.string().required(),
      password: Joi.string().required()
  }


  handleSubmit = (e) => {

    // 3shan mi3mlsh reload ll page
    e.preventDefault();

    const errors = this.validate();
 
     if (errors) return;
 
     //Call Backend
     console.log("submit");
  };

  validate = () => {

    // errors objects
    const  errors = {}

    const state = {...this.state};
    delete state.errors ; // 3shan y validate 3la el username w el password bs mn 8er el errors


    //abortEarly 3shan y3rd kol el errors
    let res = Joi.validate(state , this.schema , {abortEarly: false}) ;

    if(res.error === null){
        this.setState({errors:{}})
        return null;
    }
    else{
        res.error.details.map(e => errors[e.path] = e.message);
        this.setState({errors});
        return errors;
    }


    // trim to remove all spaces 
    // if (this.state.username.trim() === "") {
    //   errors.username = "Username is required";
    // }
    // if (this.state.password.trim() === "") {
    //   errors.password = "Password is required";
    // }
    // //edit
    // this.setState({ errors });
    // return Object.keys(errors).length === 0 ? null : errors ;   
  };

  handleChange = (e) => {
    //clone
    let state = { ...this.state };
    //edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //set state
    this.setState(state);
  };

  render() {
    return (
      <React.Fragment>
        <form className="container m-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">userName</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={this.state.name}
              onChange={this.handleChange}
              name="username"
            />
            {this.state.errors.username && (<div className="alert alert-danger">{this.state.errors.username}</div>)}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
            {this.state.errors.password && (<div className="alert alert-danger">{this.state.errors.password}</div>)}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
