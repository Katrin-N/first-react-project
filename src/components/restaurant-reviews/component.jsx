import React, {Fragment} from "react";
import {RestaurantReviewItem} from "../restaurant-review-item/component.jsx";

export const RestaurantReviews = ({reviews}) => {
    return <Fragment>
        <h3>Reviews</h3>
        <ul>
            {reviews.map((review) => (<RestaurantReviewItem review={review}/>))
            }
        </ul>
    </Fragment>;
};

