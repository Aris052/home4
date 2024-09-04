import React, { useContext, useState } from 'react'
import { ToDoContext } from './context'

export default function ToDoFilter() {
	const { toFilter } = useContext(ToDoContext)
	const [filter, setFilter] = useState('all')

	const handleFilterChange = (event) => {
		const newFilter = event.target.value
		setFilter(newFilter)
		toFilter(newFilter)
	}

	return (
		<div>
			<select
				className='form-select mt-3'
				value={filter}
				onChange={handleFilterChange}
			>
				<option value='all'>All</option>
				<option value='active'>Active</option>
				<option value='completed'>Completed</option>
			</select>
		</div>
	)
}