import {Fragment, useState} from "react";
import {RestaurantTabMenu} from "../../components/restaurant-tab-menu/component.jsx";
import {RestaurantMainContent} from "../../components/restaurant-main-content/component.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/features/entities/restaurant/selectors.js";

export const RestaurantsPage = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, selectedRestaurantId)
    );

    return <Fragment>
        <RestaurantTabMenu onSelectButton={setSelectedRestaurantId} />
        <RestaurantMainContent restaurant = {restaurant}/>
    </Fragment>;
};
