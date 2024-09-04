import { useState } from 'react'
import AddToDo from './AddToDo'
import ToDoFilter from './ToDoFilter'
import { ToDoContext } from './context'
import List from './list'

export default function ToDoList() {
	const [error, setError] = useState("")
	const [todo, setTodo] = useState([
		{ name: "hhh1", gorc: "ass", completed: false },
		{ name: "hhh2", gorc: "ass", completed: false },
		{ name: "hhh3", gorc: "ass", completed: false }
	])
	const [filter, setFilter] = useState('all')

	const handleComplete = index => {
		setTodo(todo.map((item, i) =>
			i === index ? { ...item, completed: !item.completed } : item
		))
	}

	const handleDelete = index => {
		setTodo(todo.filter((todos, i) => i !== index))
	}

	const addTodo = newTodo => {
		if (!newTodo.name.trim() || !newTodo.gorc) {
			return setError("Please fill all the fields")
		}
		setError("")
		setTodo([...todo, { ...newTodo, completed: false }])
	}


	const handleFilterChange = newFilter => {
		setFilter(newFilter)
	}

	const filteredTodos = todo.filter(todo => {
		if (filter === 'all') return true
		if (filter === 'active') return !todo.completed
		if (filter === 'completed') return todo.completed
		return true
	})


	return <>
		{error && <h1 className='text-danger'>{error}</h1>}
		<ToDoContext.Provider value={{ addTodo, toFilter: handleFilterChange, todos: filteredTodos, handleComplete, handleDelete }}>
			<AddToDo />
			<ToDoFilter />
			<List />
		</ToDoContext.Provider>
	</>

}


