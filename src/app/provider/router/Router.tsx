import { createBrowserRouter } from "react-router-dom";
import { Albums } from "../../../pages/Albums/Albums";
import { Comments } from "../../../pages/Comments/Comments";
import { Photos } from "../../../pages/Photos/Photos";
import { Posts } from "../../../pages/Posts/Posts";
import { Todos } from "../../../pages/Todos/Todos";
import MainLayout from "../../../shared/layouts/MainLayout";


export const router = createBrowserRouter([{
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'posts',
            element: <Posts />,
            children: [{path: ':id/comments'}]
        },
        {
            path: 'users/:id/albums',
            element: <Albums />
        },
        {
            path: 'users/:id/albums/:albumId/photos',
            element: <Photos />
        },
        {
            path: 'users/:id/todos',
            element: <Todos />
        },
        {
            path: 'users/:id/posts',
        }]
}
]
)