import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {REQUEST_STATUSES} from "../../../../constants/request-statuses.js";
import {getUser} from "./thunks/get-user.js";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
      name: "user",
      initialState: entityAdapter.getInitialState({
        status: REQUEST_STATUSES.idle,
      }),
      extraReducers: (builder) =>
          builder
          .addCase(getUser.pending, (state) => {
            state.status = REQUEST_STATUSES.pending;
          })
          .addCase(getUser.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
            state.status = REQUEST_STATUSES.fulfilled;
          })
          .addCase(getUser.rejected, (state) => {
            state.status = REQUEST_STATUSES.rejected;
          }),
});
