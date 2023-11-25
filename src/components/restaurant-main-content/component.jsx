import {RestaurantMenu} from "../restaurant-menu/component.jsx";
import {RestaurantReviews} from "../restaurant-reviews/component.jsx";
import {Fragment} from "react";

export const RestaurantMainContent = ({ restaurant }) => {
    if (!restaurant) {
        return ;
    }

    return <Fragment>
        <h1>{restaurant.name}</h1>
        <RestaurantMenu menu={restaurant.menu}/>
        <RestaurantReviews reviews={restaurant.reviews}/>
    </Fragment>;
};
