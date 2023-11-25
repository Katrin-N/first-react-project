import {Fragment} from "react";

export const RestaurantMenu = ({menu}) => {
    return <Fragment>
        <h3>Меню</h3>
        <ul>
            {menu.map((menuItem) => (
                <>
                    <li>
                        {menuItem.name} - {menuItem.price}
                    </li>
                </>))
            }
        </ul>
    </Fragment>;
};
