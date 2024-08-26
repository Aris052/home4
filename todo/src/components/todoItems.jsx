export default function ToDoItem({ item, index, handleComplete }) {
	return <>
		<div
			className={`text-bg-primary col-md-4 mt-5 ${item.completed ? 'completed' : ''}`}
		>
			<h3 className='ms-5' style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
				Name: {item.name}
			</h3>
			<h3 className='ms-5' style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
				Gorc: {item.gorc}
			</h3>
			<button
				className={`btn ${item.completed ? 'btn-danger' : 'btn-success'} ms-5 mt-3 mb-3`}
				style={{ background: item.completed ? "red" : "" }}
				onClick={() => handleComplete(index)}
			>
				{item.completed ? 'Cancel' : 'Complete'}
			</button>
		</div>
	</>

}

