import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const commentsAPI = createApi({
    reducerPath: 'commentsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        fetchPostComments: builder.query({
            query: (id) => ({
                url: `/posts/${id}/comments`
            })
        })
    })
})