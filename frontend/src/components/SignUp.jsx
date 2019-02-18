import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      success: false
    };
  }
  handleInput = e => {
    this.setState({
      status: false,
      success: false
    });
    console.log(e.target.value);
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/signup", this.state)
      .then(res => {
        console.log(res);

        if (res.data.isRegistered) {
          this.setState({
            status: true
          });
        }
        if (res.data.success) {
          this.setState({
            success: true
          });
        }
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <Navigation />

        <div className="container">
          <form
            style={{ minWidth: "300px" }}
            onSubmit={this.submit}
            action="http://localhost:3001/api/users/signup"
            method="post"
          >
            <div className="form-group">
              <label htmlFor="userInput">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="userInput"
                aria-describedby="userInput"
                placeholder="Enter name"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={this.handleInput}
              />
            </div>
            <input
              name="submit"
              type="submit"
              className="form-control bg-info text-light"
              value="Submit"
              onClick={this.submit}
            />
            {this.state.status && (
              <div>
                <div className="text-warning">
                  <em>
                    A user with this email is already registered. Sign in to
                    create your cocktail
                  </em>
                </div>
                <Link to="/sign-in">
                  <input
                    type="button"
                    className="form-control bg-info text-light mt-3"
                    value="go to sign in"
                  />
                </Link>
              </div>
            )}
            {this.state.success && (
              <div>
                <div className="text-light mt-3">
                  <b>Congratulations, your Registration was successful.</b>
                  <div className="row">
                    <Link to="/post-cocktail">
                      <input
                        style={{
                          color: "white",
                          backgroundColor: "#17a2b8"
                        }}
                        type="button"
                        className="btn m-2 "
                        value="create cocktail"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
