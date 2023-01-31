import { actionTypes } from "./ActionTypes";
import { asyncIncreaseFn, asyncErrorFn } from "../../utils/Functions";
import { Dispatch } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const factory = (
    dispatch: Dispatch<{ type: string } | { type: string; payload: { counter: number; loading?: boolean } }>,
) => {
    return {
        increase: () => dispatch({ type: actionTypes.INCREASE }),
        decrease: () => dispatch({ type: actionTypes.DECREASE }),
        reset: () => dispatch({ type: actionTypes.RESET }),
        setCounter: (payload: { counter: number; loading?: boolean }) =>
            dispatch({ type: actionTypes.SET_COUNTER, payload }),
        asyncIncrease: () => asyncIncreaseFn(dispatch),
        asyncError: () => asyncErrorFn(dispatch),
    };
};
