import {RestaurantBlock} from "../restaurant-block/component.jsx";

export const RestaurantMainContent = ({ restaurants }) => {
    return <div>
        {
            restaurants.map((restaurant) => (
                <>
                    <RestaurantBlock restaurant={restaurant} />
                </>
            )
        )}
    </div>;
};
