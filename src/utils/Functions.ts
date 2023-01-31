import { Dispatch } from "react";
import { actionTypes } from "../contexts/CounterContext/ActionTypes";

interface iActions {
    increase: () => void;
    decrease: () => void;
    reset: () => void;
    setCounter: (payload: number) => void;
    asyncIncrease: () => Promise<unknown>;
    asyncError: () => Promise<unknown>;
}

export const asyncIncreaseFn = async (dispatch: Dispatch<{ type: string }>) => {
    dispatch({ type: actionTypes.ASYNC_INCREASE_START });

    return await new Promise((r) => {
        setTimeout(() => {
            dispatch({ type: actionTypes.ASYNC_INCREASE_END });
            r("RESOLVED!");
        }, 2000);
    });
};

export const asyncErrorFn = async (dispatch: Dispatch<{ type: string }>) => {
    dispatch({ type: actionTypes.ASYNC_INCREASE_START });

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR });
            reject(new Error("Deu ruim!"));
        }, 2000);
    });
};

export const handleError = (actions: iActions) => {
    actions
        .asyncError()
        .then((resp: unknown) => console.log(resp))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => alert(`${error.name} : ${error.message}`));
};
