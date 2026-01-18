import { useTheme } from "../../../shared/lib/theme/useTheme"
import type { Todo } from "../model/types";

type TodoProps = {
    todo: Todo;
}

export function TodoCard(props: TodoProps) {
    const { theme } = useTheme();
    const {todo} = props;
    return <div data-component='todo' data-theme={theme}>
        <h2>{todo.title}</h2>
        <p>{todo.completed ? "Completed!" : "In progress..."}</p>
    </div>
}