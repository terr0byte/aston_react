import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const commentsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query({
            query: (id) => ({
                url: `/posts/${id}/comments`
            })
        })
    })
})