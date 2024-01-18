function TodoListItem({todo, setTodos}) {
    const { id, content, is_checked }  = todo 

    const onDelete = async () => {
        await fetch(`https://todo-deploy2401.fly.dev/api/v1/todos/${id}`, {
            method: 'DELETE'
        })

        await fetch("https://todo-deploy2401.fly.dev/api/v1/todos")
            .then((res) => res.json())
            .then((result) => setTodos(result.data));
    }

    const onToggle = async () => {
        await fetch(`https://todo-deploy2401.fly.dev/api/v1/todos/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                is_checked: !is_checked
            })
        })

        await fetch("https://todo-deploy2401.fly.dev/api/v1/todos")
            .then((res) => res.json())
            .then((result) => setTodos(result.data));
    }

    return ( 
        <div style={{ textDecoration: is_checked ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={is_checked} onChange={() => onToggle(id)} />
            {id}<span>번 : {content}</span>
            <button onClick={() => onDelete(id)}>삭제</button>
        </div> 
    );
}

export default TodoListItem;