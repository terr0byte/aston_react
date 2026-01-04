import React from 'react';
import { useTheme } from '../../../shared/lib/theme/useTheme';
import PostComment from '../../../entities/comment/ui/PostComment';
import withLoading from '../../../shared/lib/hoc/WithLoading';
import type { Comment } from '../../../utils/types';
import { mockComments } from '../../../shared/mocks/CommentMock';


interface CommentListProps {
    postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
    const { theme } = useTheme();
 
    return <div>{mockComments.map((comment: Comment) => {
        return <PostComment comment={comment} />
    })}</div>;
};

export const CommentListWithLoading = withLoading(CommentList);