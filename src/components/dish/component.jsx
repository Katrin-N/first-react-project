import {Counter} from "../counter/component.jsx";
import {useSelector} from "react-redux";
import {useState} from "react";
import {selectDishById} from "../../redux/features/entities/dish/selectors.js";

export const Dish = ({id}) => {
    const [amount, setAmount] = useState(0);
    const menuItem = useSelector((state) => selectDishById(state, id));

    return <div>
        <div>{menuItem.name} - {menuItem.price}</div>
        <Counter minValue={0} maxValue={5} step={1} value={amount} onChangeCounter={setAmount} />
    </div>;
};
