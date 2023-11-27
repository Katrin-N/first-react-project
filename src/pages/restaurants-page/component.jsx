import {Fragment} from "react";
import {RestaurantTabMenu} from "../../components/restaurant-tab-menu/component.jsx";
import {RestaurantMainContent} from "../../components/restaurant-main-content/component.jsx";

export const RestaurantsPage = ({restaurants}) => {
    const names = Array.from(new Set(restaurants.map(({ name }) => name)));
    return <Fragment>
        <RestaurantTabMenu names = {names}/>
        <RestaurantMainContent restaurants = {restaurants}/>
    </Fragment>;
};
