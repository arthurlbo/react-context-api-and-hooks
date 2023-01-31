import { createContext, useContext, useReducer, useRef } from "react";
import { factory } from "./Factory";
import { reducer } from "./Reducer";

interface iCounterContextProvider {
    children: JSX.Element;
}

export interface iState {
    counter: number;
    loading: boolean;
}

export interface iActions {
    type: string;
    payload?: { counter: number; loading?: boolean } | undefined;
}

export const initialState: iState = {
    counter: 0,
    loading: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Context = createContext<any>(undefined);

export const CounterContextProvider = ({ children }: iCounterContextProvider) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useRef(factory(dispatch));

    return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};

export const useCounterContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("You have to use useCounterContext inside <CounterContextProvider />");
    }

    return [...context];
};
