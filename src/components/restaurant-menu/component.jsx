import {Fragment} from "react";
import {useSelector} from "react-redux";
import {selectDishIdsByRestaurantId} from "../../redux/features/entities/dish/selectors.js";
import {Dish} from "../dish/component.jsx";

export const RestaurantMenu = ({restaurantId}) => {
    const dishIds = useSelector((state) =>
        selectDishIdsByRestaurantId(state, restaurantId)
    );

    return <Fragment>
        <h3>Меню</h3>
        <ul>
            {dishIds.map((id) => (
                <><li>
                    <Dish id={id}/>
                </li></>))
            }
        </ul>
    </Fragment>;
};
