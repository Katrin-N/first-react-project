import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectRestaurantIds} from "../../redux/features/entities/restaurant/selectors.js";
export const RestaurantTabMenu = ({ onSelectButton }) => {
    const restaurants = useSelector(selectRestaurantIds);
    return <div className={styles.block}>
        {
            restaurants.map(({name, id}) =>
                <button onClick={() => onSelectButton(id)} className={`${styles.menu}`}>
                    {name}</button>
            )
        }
    </div>;
};
