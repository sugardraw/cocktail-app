import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
        status: true
      };
         
  }
  handleInput = e => {
    console.log(e.target.value);
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = e => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/users/signin", this.state)
    .then(res =>{
        
        
        console.log(res)
        if (res.data.isRegistered === false) {
            this.setState({
              status: false
            });
          }
    
    
    
    })
  };
  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.submit}
          action="http://localhost:3001/api/users/signin"
          method="post"
        >
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {!this.state.status && (
            <div>
              <Link to="/sign-up">
                <input
                  style={{
                    color: "white",
                    backgroundColor: "#17a2b8"
                  }}
                  type="button"
                  className="btn m-2 "
                  value="sign up"
                />
              </Link>
              <div className="text-warning">
                <em>You are not registered. Go to Sign Up</em>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default SingIn;
