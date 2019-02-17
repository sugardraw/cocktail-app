import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    handleInput = e => {
        console.log(e.target.value);
        let {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    submit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:3001/api/users/signup', this.state)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    };
    render() {
        return(
        <div className="container">
            <form onSubmit={this.submit}
                  action="http://localhost:3001/api/users/signup"
                  method="post">
                <div className="form-group">
                    <label htmlFor="userInput">
                        Name
                    </label>
                    <input name='name'
                           type="text"
                           className="form-control"
                           id="userInput"
                           aria-describedby="userInput"
                           placeholder="Enter name"
                           onChange={this.handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                        Email address</label>
                    <input name="email"
                           type="email"
                           className="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"
                           onChange={this.handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password"
                           type="password"
                           className="form-control"
                           id="exampleInputPassword1"
                           placeholder="Password"
                           onChange={this.handleInput}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}

export default SignUp;