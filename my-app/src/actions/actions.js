import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_WIN = "FETCH_DATA_WIN";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";


export const getFact = () => dispatch => {
    dispatch({type: FETCH_DATA_START});
    axios
        .get("https://cat-fact.herokuapp.com/facts/random")
        .then (res => {
            dispatch({type: FETCH_DATA_WIN, payload: res.data.text});
        })
        .catch(err => {
            dispatch({type: FETCH_DATA_FAIL, payload: err.message});
        });
};