import {Fragment} from "react";

export const RestaurantReviews = ({reviews}) => {
    return <Fragment>
        <h3>Reviews</h3>
        <ul>
            {reviews.map((review) => (
                <>
                    <li>{review.user} - {review.text}</li>
                </>
            ))
            }
        </ul>
    </Fragment>;
};

