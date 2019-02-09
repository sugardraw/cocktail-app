import React, { Component } from "react";
import { connect } from "react-redux";
import { getCocktails } from '../redux/actions/actionCreator';
import DisplayCocktailCard from "./DisplayCocktailCard";
// import { Link } from "react-router-dom";

class ShowCocktails extends Component {
    // handleClick = (e) =>{
    //     console.log(e.target.value.trim());
    //     e.preventDefault();
    //     const ingredient = e.target.value.trim();
    //     this.props.getCocktails(ingredient);
    // };
    handleSubmit = e => {
        e.preventDefault();
        const ingredient = this.refs.userIngredient.value.trim();
        this.props.getCocktails(ingredient);
        console.log(ingredient);
    };
    render() {
        console.log(this.props.cocktails);
        return(
            <div className="container">
                <div>
                    <form onSubmit={this.handleSubmit}
                          className="d-inline-flex p-2 bd-highlight">
                        <input
                            type="text"
                            className="form-control cocktail-input"
                            placeholder="which ingredients do you have..."
                            aria-label="ingredient"
                            aria-describedby="search-by-ingredient"
                            ref="userIngredient"
                        />
                        <input type="submit"
                               value='To Cocktails'
                               className="btn btn-primary mb-2"/>
                    </form>
                </div>
                <DisplayCocktailCard cocktailList={this.props.cocktails}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cocktails: state.cocktailsReducer.cocktails
});
export default connect( mapStateToProps, { getCocktails })(ShowCocktails)