import React, {Component} from 'react';
import { connect } from "react-redux";


class DisplayCocktailCard extends Component {
    render() {
        console.log(this.props.cocktails);
        return(
            <div>
                {this.props.cocktails.map( item => {
                    console.log(item);
                    return(
                        <li>{item.title}</li>
                        )


                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cocktails: state.cocktailsReducer.cocktails
});

export default connect(mapStateToProps, null)(DisplayCocktailCard)