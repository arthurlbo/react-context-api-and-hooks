import { useCounterContext } from "../../contexts/CounterContext";

const Counter = () => {
    const [state] = useCounterContext();

    return <h1>{state.counter}</h1>;
};

export default Counter;
