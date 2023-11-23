import React, {Fragment} from "react";
import {RestaurantMenuItem} from "../restaurant-menu-item/component.jsx";

export const RestaurantMenu = ({menu}) => {
    return <Fragment>
        <h3>Меню</h3>
        <ul>
            {menu.map((menuItem) => (<RestaurantMenuItem menuItem={menuItem}/>))
            }
        </ul>
    </Fragment>;
};
