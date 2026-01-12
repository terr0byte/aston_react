import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query({
            query: () => ({
                url: '/posts'
            })
        })
    })
})