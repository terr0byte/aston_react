export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export function PostCard({title, body}: Post) {
    return <div>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
}