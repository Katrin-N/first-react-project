import styles from "./styles.module.css";
import {useTheme} from "../theme/hooks.js";
export const Counter = ({minValue, maxValue, step, value, onChangeCounter}) => {
    const { theme } = useTheme();
    return <div className={styles.counter}>
        <button className={`${styles.button} ${styles[theme]}`} onClick={() => onChangeCounter(value <= minValue ? minValue : value - step)}>-</button>
        <div className={styles.value}>{value}</div>
        <button className={`${styles.button} ${styles[theme]}`} onClick={() => onChangeCounter(value >= maxValue ? maxValue : value + step)}>+</button>
    </div>;
};
