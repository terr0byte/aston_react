import { useState } from "react";
import { useTheme } from "../../../shared/lib/theme/useTheme"
import Button from "../../../shared/ui/Button/Button";
import { CommentListWithLoading } from "../../../widgets/CommentList/ui/CommentList";
import type { Post } from "../../../utils/types";
import { Navigate, useNavigate } from "react-router-dom";

export function PostCard({ title, body, id }: Post) {
    const { theme } = useTheme();
    const [isOpen, setOpen] = useState(false);
    let navigate = useNavigate();

    function handleClick() {
        setOpen(!isOpen)
        isOpen ? navigate('/posts') : navigate(`${id}/comments`); //переделать в отдельный компонент позже
    }
    // кнопку переделать в отдельный компонент позже
    return <div data-component='card' data-theme={theme}>
        <h2>{title}</h2>
        <p>{body}</p>
        <Button onClick={handleClick}>Открыть комментарии</Button> 
        {isOpen && <CommentListWithLoading postId={id} />} 
    </div>
}