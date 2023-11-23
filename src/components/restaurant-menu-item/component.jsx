import React from "react";

export const RestaurantMenuItem = ({menuItem}) => {
    return <li>
        {menuItem.name} - {menuItem.price}
    </li>;
};
