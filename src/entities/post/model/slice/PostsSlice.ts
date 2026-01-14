import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter();

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState({posts: []}),
    reducers: {
        postsReceived: postsAdapter.setAll
    }
})

export default postsSlice.reducer;