import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import { PostListWithLoading } from "../../widgets/PostList/PostList";

export function Posts() {

    const { data, isLoading } = usePosts();
    return (<PostListWithLoading initialPosts={data} isLoading={isLoading} />)
}