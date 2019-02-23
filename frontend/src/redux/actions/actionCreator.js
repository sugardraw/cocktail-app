
import axios from "axios";

export const searchMatches = ingredient => dispatch => {
    console.log("action", ingredient);
    axios
        .get(`http://localhost:3001/api/cocktails/get-matches/?name=${ingredient}`)
        .then(data => {
            console.log('axios', ingredient);
            dispatch({
                type: "LOAD_MATCHES",
                payload: data.data,
                ingredient: ingredient,
            })
        })
        .catch( error => console.log(error))
};
