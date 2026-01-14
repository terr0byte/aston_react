import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { postsAPI } from "../../../entities/post/api/postsApi";
import { commentsAPI } from "../../../entities/comment/api/commentsApi";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([postsAPI.middleware, commentsAPI.middleware]),
})