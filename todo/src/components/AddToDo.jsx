import { useState } from 'react'

export default function AddToDo({ addTodo }) {
	const [user, setUser] = useState({
		name: "",
		gorc: ""
	})

	const handleSubmit = event => {
		event.preventDefault()
		addTodo(user)
		setUser({ name: "", gorc: "" })
	}

	return <>
		<form onSubmit={handleSubmit}>
			<label className="form-label form-control-lg">Name:</label>
			<input
				type='text'
				className="form-control mx-3"
				placeholder="Enter name"
				value={user.name}
				onChange={e => setUser({ ...user, name: e.target.value })}
			/>
			<label className="form-label form-control-lg mt-2">Gorc:</label>
			<input
				className="form-control mx-3"
				type="text"
				placeholder='Enter gorc'
				value={user.gorc}
				onChange={e => setUser({ ...user, gorc: e.target.value })}
			/>
			<button className="btn btn-primary mt-4 ms-5" type="submit">Add</button>
		</form>
	</>

}


