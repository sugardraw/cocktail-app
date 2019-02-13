import React, { Component } from "react";
import { connect } from "react-redux";
import { getAll } from '../redux/actions/actionCreator';


class ShowAll extends Component {
    componentDidMount() {
        const dispatch = this.props.getAll();
        console.log(dispatch);
    }

    render() {
        console.log('Show all', this.props.cocktails);
        return(
            <div className="container">
                {this.props.cocktails.map( cocktail => (
                    <div key={cocktail._id}>
                        <h1>{cocktail.title}</h1>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cocktails: state.cocktailsReducer.cocktails
});

export default connect( mapStateToProps, { getAll })(ShowAll)