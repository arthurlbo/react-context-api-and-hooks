const prefix = "CounterContext";

interface iActionType {
    INCREASE: "CounterContext/INCREASE";
    DECREASE: "CounterContext/DECREASE";
    RESET: "CounterContext/RESET";
    SET_COUNTER: "CounterContext/SET_COUNTER";
    ASYNC_INCREASE_START: "CounterContext/ASYNC_INCREASE_START";
    ASYNC_INCREASE_END: "CounterContext/ASYNC_INCREASE_END";
    ASYNC_INCREASE_ERROR: "CounterContext/ASYNC_INCREASE_ERROR";
}

export const actionTypes: iActionType = {
    INCREASE: `${prefix}/INCREASE`,
    DECREASE: `${prefix}/DECREASE`,
    RESET: `${prefix}/RESET`,
    SET_COUNTER: `${prefix}/SET_COUNTER`,
    ASYNC_INCREASE_START: `${prefix}/ASYNC_INCREASE_START`,
    ASYNC_INCREASE_END: `${prefix}/ASYNC_INCREASE_END`,
    ASYNC_INCREASE_ERROR: `${prefix}/ASYNC_INCREASE_ERROR`,
};
