import styles from "./styles.module.css";
export const Counter = ({minValue, maxValue, step, value, onChangeCounter}) => {
    return <div className={styles.counter}>
        <button className={styles.button} onClick={() => onChangeCounter(value <= minValue ? minValue : value - step)}>-</button>
        <div className={styles.value}>{value}</div>
        <button className={styles.button} onClick={() => onChangeCounter(value >= maxValue ? maxValue : value + step)}>+</button>
    </div>;
};
