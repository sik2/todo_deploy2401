import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todos, setTodos}) {
    return ( 
        <div>
            {todos && todos.map(todo => (
                <TodoListItem 
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                />
            ))}
        </div> 
    );
}

export default TodoList;