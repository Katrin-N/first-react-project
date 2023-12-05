import {RestaurantMenu} from "../restaurant-menu/component.jsx";
import {RestaurantReviews} from "../restaurant-reviews/component.jsx";

import styles from "./styles.module.css";
export const RestaurantMainContent = ({ restaurant }) => {
    if (!restaurant) {
        return ;
    }

    return <div className={styles.content}>
        <h1 className={styles.title}>{restaurant.name}</h1>
        <RestaurantMenu menu={restaurant.menu}/>
        <RestaurantReviews reviews={restaurant.reviews}/>
    </div>;
};
