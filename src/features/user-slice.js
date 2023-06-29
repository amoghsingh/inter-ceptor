import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../services/api";

export const fetchAsyncUsers = createAsyncThunk(
  "users/fetchAsyncUsers",
  async () => {
    const response = await API(
      "https://jsonplaceholder.typicode.com/users",
      "GET"
    );
    return response.data;
  }
);

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
  extraReducers: {
    [fetchAsyncUsers.pending]: () => {
      console.log("Pending...");
    },
    [fetchAsyncUsers.fulfilled]: (state, { payload }) => {
      return { ...state, users: payload };
    },
    [fetchAsyncUsers.rejected]: () => {
      console.log("Rejected!");
    },
  },
});
export const fetchUsers = userSlice.actions;
export const getAllUsers = (state) => state.users.users;
export default userSlice.reducer;
