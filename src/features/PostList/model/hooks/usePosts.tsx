import { useEffect, useState } from "react";
import { postListItems } from "../../../../shared/mocks/PostListMock";
import type { Post } from "../../../../utils/types";

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setPosts(postListItems);
            setLoading(false);
        }, 500)
    }, [])
    return { posts, loading };
}