import React, { Component } from 'react';
import {connect} from "react-redux";
import {getCocktails} from "../redux/actions/actionCreator";

class DisplayCocktailCard extends Component {
    render() {
        console.log('Display', this.props);
        return(
            <div>
                {this.props.cocktails.map( cocktail => (
                    <div key={cocktail._id}>
                        <h1>{cocktail.title}</h1>
                    </div>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cocktails: state.cocktailsReducer.cocktails
});

export default connect( mapStateToProps, null)(DisplayCocktailCard);