import {Fragment} from "react";
import {RestaurantMenu} from "../restaurant-menu/component.jsx";
import {RestaurantReviews} from "../restaurant-reviews/component.jsx";

export const RestaurantBlock = ({restaurant}) => {
    return <Fragment>
        <h1>{restaurant.name}</h1>
        <RestaurantMenu menu={restaurant.menu}/>
        <RestaurantReviews reviews={restaurant.reviews}/>
    </Fragment>;
};
