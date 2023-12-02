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


export const ReviewForm = () => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    console.log(formValue);
    return <div>
       <h2>Оставьте отзыв о ресторане</h2>
        <div>
            <div>
                <label htmlFor="name">Имя</label>
                <input
                    id="name"
                    type="text"
                    value={formValue.name}
                    onChange={(event) =>
                        dispatch({ type: "setName", payload: event.target.value })
                    }
                />
            </div>
            <div>
                <label htmlFor="name">Текст</label>
                <input
                    id="name"
                    type="text"
                    value={formValue.text}
                    onChange={(event) =>
                        dispatch({ type: "setText", payload: event.target.value })
                    }
                />
            </div>
            <div>
                <label htmlFor="name">Рейтинг</label>
                <Counter minValue={0} maxValue={5} step={0.5} value={formValue.rating} onChangeCounter={(value) => dispatch({type:"setRating", payload: value})} />
            </div>
        </div>
    </div>;
};
