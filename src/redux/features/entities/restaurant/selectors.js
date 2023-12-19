export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantMenuById = (state, restarauntId) => {
    return selectRestaurantById(state, restarauntId).menu;
};

export const selectRestaurantReviewById = (state, restarauntId) => {
    return selectRestaurantById(state, restarauntId).reviews;
};
