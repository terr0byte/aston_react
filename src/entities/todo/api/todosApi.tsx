import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const todosAPI = createApi({
    reducerPath: 'todosAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        fetchAllTodos: builder.query({
            query: () => ({
                url: `/todos`
            })
        })
    })
})