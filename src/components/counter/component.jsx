import {Fragment, useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return <Fragment>
        <button onClick={() => setCounter(counter < 1 ? 0 : counter - 1)}>-</button>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter > 4 ? 5 : counter + 1)}>+</button>
    </Fragment>;
};
