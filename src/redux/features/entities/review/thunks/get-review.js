import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors.js";
import { selectRestaurantReviewById } from "../../restaurant/selectors.js";


export const getReview = createAsyncThunk(
    "review/getUser",
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(
            `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
        );

        const result = await response.json();

        if (!result.length) {
            return rejectWithValue("There is no dishes in this restaurant");
        }
        return result;
    },
    {
        condition:(restaurantId, { getState }) => {
            const state = getState();
            const restaurantDishIds = selectRestaurantReviewById(state, restaurantId);
            const reviewIds = selectReviewIds(state);
            return !restaurantDishIds.every((id) => reviewIds.includes(id));
        },
    }
);
