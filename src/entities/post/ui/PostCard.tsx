import { useTheme } from "../../../shared/lib/theme/useTheme"

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export function PostCard({title, body}: Post) {
    const {theme} = useTheme();
    return <div data-component='card' data-theme={theme}>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
}