import { useEffect, useState } from "react";
import { postListItems } from "../../../../shared/mocks/PostListMock";
import type { Post } from "../../../../utils/types";
import { postsAPI } from "../../../../entities/post/api/postsApi";

export const usePosts = () => {
    const {data, isLoading} = postsAPI.useFetchAllPostsQuery('');
    return { data, isLoading };
}