import {Fragment} from "react";
import {Counter} from "../counter/component.jsx";

export const RestaurantMenu = ({menu}) => {
    return <Fragment>
        <h3>Меню</h3>
        <ul>
            {menu.map((menuItem) => (
                <li>
                    <div>{menuItem.name} - {menuItem.price}</div>
                    <Counter/>
                </li>))
            }
        </ul>
    </Fragment>;
};
