import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/features/entities/review/selectors.js";
import {selectUserById} from "../../redux/features/entities/user/selectors.js";

export const Review = ({id}) => {
    const review = useSelector((state) => selectReviewById(state, id));
    const user =  useSelector((state) => selectUserById(state, review.userId));

    return <div>
        {user.name} - {review.text}
    </div>;
};
