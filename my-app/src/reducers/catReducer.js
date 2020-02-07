import {FETCH_DATA_START, FETCH_DATA_WIN, FETCH_DATA_FAIL} from "../actions/actions";

const initialState = {
    catCount: 0,
    catFact: "We need the Facts! Press the button!",
    error: ""
};

export const catReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                catFact: "Finding Cat Facts...",
                error: ""
            };
        case FETCH_DATA_WIN:
            return {
                ...state,
                catFact: action.payload,
                catCount: (state.catCount += 1),
                error: ""
            };
        case FETCH_DATA_FAIL:
            return {
                ...state,
                error: action.payload,
                catFact: ""
            };
        default:
            return state;
    }
};