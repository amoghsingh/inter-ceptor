import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post-slice";
import userReducer from "./user-slice";

const store = configureStore({
  reducer: { posts: postReducer, users: userReducer },
});

export default store;
