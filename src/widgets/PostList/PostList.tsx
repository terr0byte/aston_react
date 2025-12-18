import type { Post } from "../../entities/post/ui/PostCard"
import { PostCard } from "../../entities/post/ui/PostCard"

type Props = {
    posts: Post[],
}

export default function PostList({ posts }: Props) {

    const postsList = posts.map((element: Post) => (
        <PostCard body={element.body} title={element.title} id={element.id} userId={element.id}/>
    ));
    return <div>
        {postsList}
    </div>
}