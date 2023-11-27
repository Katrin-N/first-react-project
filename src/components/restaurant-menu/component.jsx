import {Fragment, useState} from "react";
import {Counter} from "../counter/component.jsx";

export const RestaurantMenu = ({menu}) => {
    const [amount, setAmount] = useState(0);
    return <Fragment>
        <h3>Меню</h3>
        <ul>
            {menu.map((menuItem) => (
                <><li>
                    <div>{menuItem.name} - {menuItem.price}</div>
                    <Counter minValue={0} maxValue={5} step={1} value={amount} onChangeCounter={setAmount} />
                </li></>))
            }
        </ul>
    </Fragment>;
};
