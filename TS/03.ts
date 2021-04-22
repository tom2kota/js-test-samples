import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/2';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(r => {
        const todo = r.data as Todo;
        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        logTodo(id, title, completed)
    }
)

const logTodo = (id: number, title: string, completed: boolean) => console.log(`
            TODO list contains:
            - ID: ${id},
            - Title: ${title},
            - Completed: ${completed}.
    `)
