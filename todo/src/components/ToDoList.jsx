import { useState } from 'react'
import AddToDo from './AddToDo'
import List from './list'

export default function ToDoList() {
	const [error, setError] = useState("")
	const [todo, setTodo] = useState([])

	const handleComplete = index => {
		const newTodos = todo.map((item, i) =>
			i === index ? { ...item, completed: !item.completed } : item
		)
		setTodo(newTodos)
	}

	const addTodo = newTodo => {
		if (!newTodo.name.trim() || !newTodo.gorc) {
			return setError("Please fill all the fields")
		}
		setError("")
		setTodo([...todo, { ...newTodo, completed: false }])
	}

	return (
		<>
			{error && <h1 className='text-danger'>{error}</h1>}
			<AddToDo addTodo={addTodo} />
			<List todos={todo} handleComplete={handleComplete} />
		</>
	)
}


