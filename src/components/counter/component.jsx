import { Fragment } from "react";

export const Counter = ({minValue, maxValue, step, value, onChangeCounter}) => {
    return <Fragment>
        <button onClick={() => onChangeCounter(value <= minValue ? minValue : value - step)}>-</button>
        <div>{value}</div>
        <button onClick={() => onChangeCounter(value >= maxValue ? maxValue : value + step)}>+</button>
    </Fragment>;
};
