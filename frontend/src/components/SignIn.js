import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
      isLogged: false,
      error: "",
      msg: ""
    };
  }
  handleInput = e => {
    this.setState({
      isRegistered: false,
      isLogged: false,
      error: "",
      msg: ""
    });
    console.log(e.target.value);
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = e => {
    e.preventDefault();

    if (this.state.email !== undefined || this.state.password !== undefined) {
      axios
        .post("http://localhost:3001/api/users/signin", this.state)
        .then(res => {
          console.log(res);
          if (res.data.isRegistered === false) {
            this.setState({
              isRegistered: true,
              error: "You are not registered. You should sign up first"
            });
          }
          if (res.data.isLogged) {
            this.setState({
              isLogged: true
            });
          }
        });
    } else {
      console.log("test 2");
      this.setState({
        msg: "please, send us a valid email and a password"
      });
    }
  };
  render() {
    return (
      <div>
        <Navigation />

        <div className="container">
          <form
            style={{ minWidth: "300px" }}
            onSubmit={this.submit}
            action="http://localhost:3001/api/users/signin"
            method="post"
          >
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.handleInput}
                required
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
                required
              />
            </div>

            <input
              name="submit"
              type="submit"
              className="form-control bg-info text-light"
              value="Submit"
              onClick={this.submit}
            />
            {this.state.isRegistered && (
              <div>
                <div className="text-light mt-3">
                  <b>{this.state.error}</b>
                </div>
                <Link to="/sign-up">
                  <input
                    type="button"
                    className="form-control bg-info text-light mt-3"
                    value="go to sign up"
                  />
                </Link>
              </div>
            )}
            {this.state.msg !== "" && (
              <div>
                <div className="text-light mt-3">
                  <b>{this.state.msg}</b>
                </div>
              </div>
            )}
            {this.state.isLogged && (
              <div>
                <div className="text-light mt-3">
                  <b>Congratulations,Log in was successful.</b>
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
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default SingIn;
