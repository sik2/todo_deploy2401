import { useState } from "react";

function TodoInsert({setTodos}) {
    const [text, setText] = useState('')

    const onInsert = async (text) => {
        await fetch(`https://todo-deploy2401.fly.dev/api/v1/todos`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: text
            })
        })

        await fetch("https://todo-deploy2401.fly.dev/api/v1/todos")
            .then((res) => res.json())
            .then((result) => setTodos(result.data));
    }

    const onChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        onInsert(text)
        setText('')
        e.preventDefault()
    }

    return ( 
        <div>
            <form onSubmit={onSubmit}>
               <input 
                    placeholder="할 일을 입력하세요."
                    type="text"
                    value={text}
                    onChange={onChange}
               /> 
               <button type="submit">저장</button>
            </form>
        </div> 
    );
}

export default TodoInsert;