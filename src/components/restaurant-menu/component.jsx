import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectDishIdsByRestaurantId} from "../../redux/features/entities/dish/selectors.js";
import {Dish} from "../dish/component.jsx";
import {getDishes} from "../../redux/features/entities/dish/thunks/get-dishes.js";

export const RestaurantMenu = ({restaurantId}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDishes(restaurantId));
    }, [restaurantId]);

    const menu = useSelector((state) => selectDishIdsByRestaurantId(state, restaurantId));

    return <Fragment>
        <h3>Меню</h3>
        <ul>
            {menu.map((id) => (
                <><li>
                    <Dish id={id}/>
                </li></>))
            }
        </ul>
    </Fragment>;
};
