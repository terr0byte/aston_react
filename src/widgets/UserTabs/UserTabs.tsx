import { NavLink } from "react-router-dom";

export function UserTabs() {
    return(<nav>
        <NavLink to={'/posts'}>Посты</NavLink>
        <NavLink to={'/users/1/albums'}>Альбомы</NavLink>
        <NavLink to={'/users/1/todos'}>Todos</NavLink>
    </nav>)
}