import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {REQUEST_STATUSES} from "../../../../constants/request-statuses.js";
import {getReview} from "./thunks/get-review.js";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder
        .addCase(getReview.pending, (state) => {
          state.status = REQUEST_STATUSES.pending;
        })
        .addCase(getReview.fulfilled, (state, { payload }) => {
          entityAdapter.upsertMany(state, payload);
          state.status = REQUEST_STATUSES.fulfilled;
        })
        .addCase(getReview.rejected, (state) => {
          state.status = REQUEST_STATUSES.rejected;
        });
  },
});
