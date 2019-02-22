
import  { LOAD_MATCHES, LOAD_COCKTAIL, LOAD_ALL } from '../actions/actionTypes';

const initialState = {
    cocktails: [],
    matches: []
};

export default function( state= initialState, action ) {
    console.log('Reducer', action.type);

    switch (action.type) {
        case LOAD_MATCHES: {
            console.log('Case: Load-matches', action.type, action.payload);
            return {
                ...state,
                matches: action.payload,
            };
        }
        case LOAD_COCKTAIL: {
            console.log('Reducer case', action.type);
            console.log('Case: Load-matches', action.payload, action.matches)
            return{
                ...state,
                cocktails: action.payload
            }
        }
        case LOAD_ALL: {
            return {
                ...state,
                cocktails: action.payload
            }
        }
        default:
            return state;

    }
}