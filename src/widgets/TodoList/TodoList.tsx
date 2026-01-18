import type { Todo } from "../../entities/todo/model/types";
import { TodoCard } from "../../entities/todo/ui/TodoCard";
import { useTodos } from "../../features/TodoList/model/hooks/useTodos";
import ItemList from "../../shared/ui/ItemList/ItemList";

export function TodoList() {
    const { data, isLoading } = useTodos();
    const renderItem = (todo: Todo) => <TodoCard todo={todo} />        

    return (isLoading ? 'Loading...' : <ItemList items={data} renderItem={renderItem}/>)
}