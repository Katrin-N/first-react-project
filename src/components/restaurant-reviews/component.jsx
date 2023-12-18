import {Fragment} from "react";
import {ReviewForm} from "../review-form/component.jsx";
import {useSelector} from "react-redux";
import {selectReviewIdsByRestaurantId} from "../../redux/features/entities/review/selectors.js";
import {Review} from "../review/component.jsx";

export const RestaurantReviews = ({restaurantId}) => {
    const reviewsIds = useSelector((state) =>
        selectReviewIdsByRestaurantId(state, restaurantId)
    );

    return <Fragment>
        <h3>Reviews</h3>
        <ul>
            {reviewsIds.map((id) => (
                <li><Review id={id}/></li>
            ))
            }
        </ul>
        <ReviewForm/>
    </Fragment>;
};

