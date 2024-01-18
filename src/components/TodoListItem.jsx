function TodoListItem({todo}) {
    const { id, content, is_checked }  = todo 

    const onDelete = () => {
        fetch(`https://todo-deploy2401.fly.dev/api/v1/todos/${id}`, {
            method: 'DELETE'
        })
    }

    const onToggle = () => {
        fetch(`https://todo-deploy2401.fly.dev/api/v1/todos/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                is_checked: !is_checked
            })
        })
    }

    return ( 
        <div style={{ textDecoration: is_checked ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={is_checked} onChange={() => onToggle(id)} />
            {id}<span>{content}</span>
            <button onClick={() => onDelete(id)}>삭제</button>
        </div> 
    );
}

export default TodoListItem;