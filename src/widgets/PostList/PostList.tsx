import type { Post } from "../../entities/post/ui/PostCard"
import { PostCard } from "../../entities/post/ui/PostCard"
import { useTheme } from "../../shared/lib/theme/useTheme";

type Props = {
    posts: Post[],
}

export default function PostList({ posts }: Props) {

    const {theme} = useTheme();

    const postsList = posts.map((element: Post, index) => (
        <div key={`post-${index}`}>
            <PostCard body={element.body} title={element.title} id={element.id} userId={element.id} />
        </div>
    ));
    return <div data-component='post-list' data-theme={theme}>
        {postsList}
    </div>
}