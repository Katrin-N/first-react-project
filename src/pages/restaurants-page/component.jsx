import {Fragment, useEffect, useState} from "react";
import {RestaurantTabMenu} from "../../components/restaurant-tab-menu/component.jsx";
import {RestaurantMainContent} from "../../components/restaurant-main-content/component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    selectRestaurantById,
} from "../../redux/features/entities/restaurant/selectors.js";
import {getUser} from "../../redux/features/entities/user/thunks/get-user.js";

export const RestaurantsPage = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, selectedRestaurantId)
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    });

    return <Fragment>
        <RestaurantTabMenu onSelectButton={setSelectedRestaurantId} />
        <RestaurantMainContent restaurant = {restaurant}/>
    </Fragment>;
};
