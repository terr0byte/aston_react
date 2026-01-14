import React from 'react'
import { useTheme } from '../../../shared/lib/theme/useTheme';
import type { Comment } from '../../../utils/types';

interface Props {
    comment: Comment;
}

const PostComment: React.FC<Props> = ({ comment }) => {
    const { theme } = useTheme();

    return (<div data-component='comment' data-theme={theme} key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.body}</p>
    </div>)
}

export default PostComment;