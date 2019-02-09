
import  { LOAD_COCKTAIL } from '../actions/actionTypes';

const initialState = {
    cocktails: [],
};

export default function( state= initialState, action ) {
    console.log('Reducer', action.type);
    switch (action.type) {
        case LOAD_COCKTAIL: {
            console.log('Reducer case', action.type);
            return{
                ...state,
                cocktails: action.payload
            }
        }
        default:
            return state;

    }
}