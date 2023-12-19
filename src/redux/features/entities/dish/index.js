import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {REQUEST_STATUSES} from "../../../../constants/request-statuses.js";
import {getDishes} from "./thunks/get-dishes.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState({
        status: REQUEST_STATUSES.idle,
    }),
    extraReducers: (builder) => {
        builder
            .addCase(getDishes.pending, (state) => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getDishes.fulfilled, (state, { payload }) => {
                entityAdapter.upsertMany(state, payload);
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase(getDishes.rejected, (state) => {
                state.status = REQUEST_STATUSES.rejected;
            });
    },
});
