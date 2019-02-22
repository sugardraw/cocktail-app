
import axios from "axios";

export const searchMatches = ingredient => dispatch => {
    console.log("action", ingredient);
    axios
        .get(`http://localhost:3001/api/cocktails/get-matches/?name=${ingredient}`)
        .then(data => {
            console.log(data.data);
            dispatch({
                type: "LOAD_MATCHES",
                payload: data.data
            })
        })
        .catch( error => console.log(error))
};


// export const getAll = () => dispatch => {
//     console.log("axios");
//     axios
//         .get("http://localhost:3001/api/cocktails/list")
//         .then( data => {
//             console.log('axios', data.data);
//             dispatch({
//                 type: "LOAD_ALL",
//                 payload: data.data
//             });
//         })
//         .catch( error => {
//             console.log(error);
//             dispatch({
//                 type: "LOAD_ALL"
//             })
//         })
// };