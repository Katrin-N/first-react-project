import styles from "./styles.module.css";
import { useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/features/entities/restaurant/selectors.js";

export const RestaurantTabMenuItem = ({ id, onSelectButton }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    if (!restaurant) {
        return ;
    }

    return  <button onClick={() => onSelectButton(id)} className={`${styles.menu}`}>
        {restaurant.name}</button>;
};
