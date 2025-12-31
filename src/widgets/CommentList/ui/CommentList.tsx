import React from 'react';
import { useTheme } from '../../../shared/lib/theme/useTheme';
import PostComment from '../../../entities/comment/ui/PostComment';
import withLoading from '../../../shared/lib/hoc/WithLoading';
import type { Comment } from '../../../entities/comment/ui/PostComment';


interface CommentListProps {
    postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
    const { theme } = useTheme();

    const mockComments: Comment[] = [{
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },]

    return <div>{mockComments.map((comment: Comment) => {
        return <PostComment comment={comment} />
    })}</div>;
};

export const CommentListWithLoading = withLoading(CommentList);