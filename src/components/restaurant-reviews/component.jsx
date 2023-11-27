import {Fragment} from "react";
import {ReviewForm} from "../review-form/component.jsx";

export const RestaurantReviews = ({reviews}) => {
    return <Fragment>
        <h3>Reviews</h3>
        <ul>
            {reviews.map((review) => (
                <li>{review.user} - {review.text}</li>
            ))
            }
        </ul>
        <ReviewForm/>
    </Fragment>;
};

