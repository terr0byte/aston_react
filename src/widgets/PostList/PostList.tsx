import type { Post } from "../../entities/post/ui/PostCard"
import { PostCard } from "../../entities/post/ui/PostCard"
import withLoading from "../../shared/lib/hoc/WithLoading";
import { useTheme } from "../../shared/lib/theme/useTheme";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { useCallback, useState } from "react";

type Props = {
    initialPosts: Post[],
}

function PostList({ initialPosts }: Props) {
    const [posts, setPosts] = useState<Post[]>(initialPosts)

    const { theme } = useTheme();

    const handleFilter = useCallback(
        (filteredPosts: Post[]) => setPosts(filteredPosts),
        []
    );

    const postsList = posts.map((element: Post, index) => (
        <div key={`post-${index}`}>
            <PostCard body={element.body} title={element.title} id={element.id} userId={element.id} />
        </div>
    ));
    return (<div data-component='post-list' data-theme={theme}>
        <PostLengthFilter items={initialPosts} onFilter={handleFilter} />
        {postsList}
    </div>)
}

export const PostListWithLoading = withLoading(PostList);