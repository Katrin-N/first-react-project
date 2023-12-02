import {Fragment, useState} from "react";
import {RestaurantTabMenu} from "../../components/restaurant-tab-menu/component.jsx";
import {RestaurantMainContent} from "../../components/restaurant-main-content/component.jsx";

export const RestaurantsPage = ({restaurants}) => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState();

    const restaurant = restaurants.find(x => x.id === selectedRestaurantId);

    return <Fragment>
        <RestaurantTabMenu restaurants = {restaurants} onSelectButton={setSelectedRestaurantId} />
        <RestaurantMainContent restaurant = {restaurant}/>
    </Fragment>;
};
