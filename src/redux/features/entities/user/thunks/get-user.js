import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds} from "../selectors.js";


export const getUser = createAsyncThunk(
    "user/getUser",
    async (_, { rejectWithValue }) => {
        const response = await fetch(
            `http://localhost:3001/api/users`
        );

        const result = await response.json();

        if (!result.length) {
            return rejectWithValue("There is no dishes in this restaurant");
        }
        return result;
    },
    {
        condition: (_, { getState }) => !selectUserIds(getState()).length,
    }
);
