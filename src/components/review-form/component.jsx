import {Counter} from "../counter/component.jsx";
import {useReducer} from "react";

const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    rating: 5,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setName":
            return {
                ...state,
                name: action.payload,
            };
        case "setText":
            return { ...state, text: action.payload };
        case "setRating":
            return { ...state, rating: action.payload };
        default:
            return state;
    }
};

import styles from "./styles.module.css";

export const ReviewForm = () => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    console.log(formValue);
    return <div className={styles.decor}>
        <div className={styles.formLeftDecoration}></div>
        <div className={styles.formRightDecoration}></div>
        <div className={styles.circle}></div>
        <div className={styles.formInner}>
            <h2 className={styles.title}>Оставьте отзыв о ресторане</h2>
            <input
                className={styles.input}
                id="name"
                type="text"
                placeholder="Имя"
                value={formValue.name}
                onChange={(event) =>
                    dispatch({ type: "setName", payload: event.target.value })
                }
            />
            <input
                id="name"
                type="text"
                className={styles.input}
                placeholder="Текст"
                value={formValue.text}
                onChange={(event) =>
                    dispatch({ type: "setText", payload: event.target.value })
                }
            />
            <div>
                <label htmlFor="name">Рейтинг</label>
                <Counter minValue={0} maxValue={5} step={0.5} value={formValue.rating} onChangeCounter={(value) => dispatch({type:"setRating", payload: value})} />
            </div>
        </div>
    </div>;
};
