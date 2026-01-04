import { useState } from "react";
import { useTheme } from "../../../shared/lib/theme/useTheme"
import Button from "../../../shared/ui/Button/Button";
import { CommentListWithLoading } from "../../../widgets/CommentList/ui/CommentList";

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export function PostCard({ title, body, id }: Post) {
    const { theme } = useTheme();
    const [isOpen, setOpen] = useState(false);

    function handleClick() {
        setOpen(!isOpen)
    }

    return <div data-component='card' data-theme={theme}>
        <h2>{title}</h2>
        <p>{body}</p>
        <Button onClick={handleClick}>Открыть комментарии</Button>
        {isOpen && <CommentListWithLoading postId={id} />}
    </div>
}