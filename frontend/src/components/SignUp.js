import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleInput = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  submit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/users/signup", this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="">
        <form
          method="POST"
          action="http://localhost:3001/api/users/signup"
          onSubmit={this.submit}
        >
          <div className="form-group">
            <label htmlFor="userInput">User Name</label>
            <input
              onChange={this.handleInput}
              name="name"
              type="text"
              className="form-control"
              id="userInput"
              aria-describedby="userInput"
              placeholder="Enter your name"
            />
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={this.handleInput}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={this.handleInput}
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
