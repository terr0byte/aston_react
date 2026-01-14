import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const albumsAPI = createApi({
    reducerPath: 'albumsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        fetchAllAlbums: builder.query({
            query: () => ({
                url: `/albums`
            })
        })
    })
})