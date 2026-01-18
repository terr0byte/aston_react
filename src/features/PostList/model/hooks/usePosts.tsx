import { postsAPI } from "../../../../entities/post/api/postsApi";

export const usePosts = () => {
    const {data, isLoading} = postsAPI.useFetchAllPostsQuery('');
    return { data, isLoading };
}