import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../../../entities/post/model/slice/PostsSlice";
import userReducer from "./slices/UserSlice";
import { postsAPI } from "../../../entities/post/api/postsApi";

export const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
    [postsAPI.reducerPath]: postsAPI.reducer
});