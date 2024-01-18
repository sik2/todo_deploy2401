import { useEffect, useState } from "react"
import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"
import TodoTemplate from "./components/TodoTemplate"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://todo-deploy2401.fly.dev/api/v1/todos")
    .then((res) => res.json())
    .then((result) => setTodos(result.data));
  }, [])

  return (
    <TodoTemplate>
      <TodoInsert setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoTemplate>
  )
}

export default App
