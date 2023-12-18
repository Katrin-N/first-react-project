import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/entities/user";
import { reviewSlice } from "./features/entities/review";
import {restaurantSlice} from "./features/entities/restaurant/index.js";
import {dishSlice} from "./features/entities/dish/index.js";

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
