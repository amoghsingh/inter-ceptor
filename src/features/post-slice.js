import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../services/api";

const initialState = {
  posts: [],
  post: {},
};

export const fetchAsyncPosts = createAsyncThunk(
  "posts/fetchAsyncPosts",
  async (id) => {
    const response = await API(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
      "GET"
    );
    return response.data;
  }
);

export const fetchAsyncPost = createAsyncThunk(
  "posts/fetchAsyncPost",
  async (id) => {
    const response = await API(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      "GET"
    );

    return response.data;
  }
);

export const createAsyncPost = createAsyncThunk(
  "posts/createAsyncPost",
  async (data) => {
    const response = await API(
      "https://jsonplaceholder.typicode.com/posts",
      "POST",
      data
    );
    return response.data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, { payload }) => {
      state.posts = payload;
    },
    removeSelectedPost: (state) => {
      state.post = {};
    },
  },
  extraReducers: {
    [fetchAsyncPosts.pending]: () => {
      console.log("Pending posts fetch!");
    },
    [fetchAsyncPosts.fulfilled]: (state, { payload }) => {
      return { ...state, posts: payload };
    },
    [fetchAsyncPosts.rejected]: () => {
      console.log("Rejected posts fetch!");
    },
    [fetchAsyncPost.pending]: () => {
      console.log("Pending post fetch!");
    },
    [fetchAsyncPost.fulfilled]: (state, { payload }) => {
      return { ...state, post: payload };
    },
    [fetchAsyncPost.rejected]: () => {
      console.log("Rejected post fetch!");
    },
  },
});

export const { removeSelectedPost } = postSlice.actions;
export const getAllPosts = (state) => state.posts.posts;
export default postSlice.reducer;
