import { todosAPI } from "../../../../entities/todo/api/todosApi";

export const useTodos = () => {
    const {data, isLoading} = todosAPI.useFetchAllTodosQuery('');
    return { data, isLoading };
}