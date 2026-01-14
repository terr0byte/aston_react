import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../../../entities/post/model/slice/PostsSlice";
import userReducer from "../../../entities/user/model/slice/userSlice";
import { postsAPI } from "../../../entities/post/api/postsApi";
import { commentsAPI } from "../../../entities/comment/api/commentsApi";
import { albumsAPI } from "../../../entities/album/api/albumsApi";
import { todosAPI } from "../../../entities/todo/api/todosApi";

export const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
    [postsAPI.reducerPath]: postsAPI.reducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
    [albumsAPI.reducerPath]: albumsAPI.reducer,
    [todosAPI.reducerPath]: todosAPI.reducer
});