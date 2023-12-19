import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import { selectRestaurantIds} from "../../redux/features/entities/restaurant/selectors.js";
import {useEffect} from "react";
import {getRestaurants} from "../../redux/features/entities/restaurant/thunks/get-restaurants.js";

import {RestaurantTabMenuItem} from "../restaurant-tab-menu-item/component.jsx";
export const RestaurantTabMenu = ({ onSelectButton }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestaurants());
    }, []);

    const restaurants = useSelector(selectRestaurantIds);


    return <div className={styles.block}>
        {
            restaurants.map((id) =>
               <RestaurantTabMenuItem id={id} onSelectButton={onSelectButton}/>
            )
        }
    </div>;
};
