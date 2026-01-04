import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import { PostListWithLoading } from "../../widgets/PostList/PostList";

export function Posts() {

    const { posts } = usePosts();
    return (<PostListWithLoading initialPosts={posts} />)
}