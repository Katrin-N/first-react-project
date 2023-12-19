import {Fragment, useEffect} from "react";
import {ReviewForm} from "../review-form/component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectReviewIdsByRestaurantId} from "../../redux/features/entities/review/selectors.js";
import {Review} from "../review/component.jsx";
import {getReview} from "../../redux/features/entities/review/thunks/get-review.js";

export const RestaurantReviews = ({restaurantId}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReview(restaurantId));
    }, [restaurantId]);

    const reviewsIds = useSelector((state) => selectReviewIdsByRestaurantId(state, restaurantId));

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

