import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/entities/user";
import { reviewSlice } from "./features/entities/review";
import {restaurantsSlice} from "./features/entities/restaurant/index.js";
import {dishesSlice} from "./features/entities/dish/index.js";

const store = configureStore({
  reducer: {
    restaurant: restaurantsSlice.reducer,
    dish: dishesSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});

export default store;
