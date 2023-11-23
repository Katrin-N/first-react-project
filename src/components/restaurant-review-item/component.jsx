import React from "react";

export const RestaurantReviewItem = ({review}) => {
    return <li>{review.user} - {review.text}</li>;
};

