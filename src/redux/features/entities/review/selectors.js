import {selectRestaurantById} from "../restaurant/selectors.js";

export const selectReviewModule = (state) => state.review;
export const selectReviewById = (state, id) => selectReviewModule(state).entities[id];
export const selectReviewIdsByRestaurantId = (state, id) => selectRestaurantById(state, id)?.reviews || [];
