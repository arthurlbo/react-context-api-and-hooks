import { useCounterContext } from "../../contexts/CounterContext";

import Counter from "../../components/Counter";
import Button from "../../components/Button";
import { handleError } from "../../utils/Functions";

const Home = () => {
    const [state, actions] = useCounterContext();

    return (
        <div className="container">
            <Counter />
            <div className="buttons">
                <Button title="Increase" onClickButton={actions.increase} />
                <Button title="Decrease" onClickButton={actions.decrease} />
                <Button title="Reset" onClickButton={actions.reset} />
                <Button title="Set 10" onClickButton={() => actions.setCounter({ counter: 10 })} />
                <Button title="Set 100" onClickButton={() => actions.setCounter({ counter: 100 })} />
                <Button isDisabled={state.loading} title="Async increase" onClickButton={actions.asyncIncrease} />
                <Button isDisabled={state.loading} title="Async error" onClickButton={() => handleError(actions)} />
            </div>
        </div>
    );
};

export default Home;
