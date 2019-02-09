
import axios from "axios";

export const getCocktails = cocktail => dispatch => {
     axios
        .get(`http://localhost:3001/api/cocktails/get-matches/?name=${cocktail}`)
        .then(data => {
            console.log('axios', data);
            dispatch({
                type: 'LOAD_COCKTAIL',
                payload: data.data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'LOAD_COCKTAILS'
            });
        });
};
