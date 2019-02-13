import React, { Component } from "react";
import { connect } from "react-redux";
import { getCocktails } from '../redux/actions/actionCreator';
import { Link } from "react-router-dom";

class ShowCocktails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: '',
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const ingredient = e.currentTarget.value.trim();
        this.setState({
            ingredient: ingredient
        });
        this.props.getCocktails(ingredient);
        console.log(ingredient);

    };
    render() {
        return(
            <div className="container">
                    <form onSubmit={this.handleSubmit}
                          className="d-inline-flex p-2 bd-highlight">
                        <input
                            type="text"
                            className="form-control cocktail-input"
                            placeholder="which ingredients do you have..."
                            onChange={this.handleSubmit}
                        />
                        <Link to={{
                            pathname: "cocktail-card",
                            search: `?name=${this.state.ingredient}`
                        }}
                              className="btn btn-primary mb-2">
                            Link
                        </Link>
                    </form>
            </div>
        )
    }
}


export default connect( null, { getCocktails })(ShowCocktails)