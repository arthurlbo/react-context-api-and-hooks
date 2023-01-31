import { initialState } from ".";
import { iActions, iState } from ".";
import { actionTypes } from "./ActionTypes";

export const reducer = (state: iState, action: iActions) => {
    switch (action.type) {
        case actionTypes.INCREASE:
            return { ...state, counter: state.counter + 1 };
        case actionTypes.DECREASE:
            return { ...state, counter: state.counter - 1 };
        case actionTypes.RESET:
            return { ...initialState };
        case actionTypes.SET_COUNTER:
            return { ...state, counter: action.payload !== undefined ? state.counter + action.payload.counter : 100 };
        case actionTypes.ASYNC_INCREASE_START:
            return { ...state, loading: true };
        case actionTypes.ASYNC_INCREASE_END:
            return { ...state, loading: false, counter: state.counter + 1 };
        case actionTypes.ASYNC_INCREASE_ERROR:
            return { ...state, loading: false };
    }

    return state;
};
