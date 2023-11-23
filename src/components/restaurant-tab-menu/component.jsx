import React from "react";
import {RestaurantTabMenuItem} from "../restaurant-tab-menu-item/component.jsx";

export const RestaurantTabMenu = ({ names }) => {
    return <div>
        {
            names.map((name) => (
                <RestaurantTabMenuItem name={name} />
            )
        )}
    </div>;
};
