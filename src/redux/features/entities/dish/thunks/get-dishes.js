import { createAsyncThunk } from "@reduxjs/toolkit";
import {selectDishIds} from "../selectors.js";
import {selectRestaurantMenuById} from "../../restaurant/selectors.js";


export const getDishes = createAsyncThunk(
    "dishes/getDishesByRestaurantId",
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(
            `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
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
            const restaurantDishIds = selectRestaurantMenuById(state, restaurantId);
            const dishIds = selectDishIds(state);
            return !restaurantDishIds.every((id) => dishIds.includes(id));
        },
    }
);
