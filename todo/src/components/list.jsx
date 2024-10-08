import { useContext } from 'react'
import { ToDoContext } from './context'
import ToDoItem from './todoItems'

export default function List() {
	const { handleDelete, handleComplete, todos } = useContext(ToDoContext)
	return <>
		<div className='col-md-12'>
			<h1 className='mt-5'>Todo List</h1>
			<ul>
				{todos.map((item, index) => (
					<ToDoItem
						key={index}
						item={item}
						index={index}
						handleComplete={handleComplete}
						onDelete={handleDelete}
					/>
				))}
			</ul>
		</div>
	</>

}


