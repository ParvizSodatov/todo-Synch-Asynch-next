"use client"
import { useState } from 'react'
import DeletTodo from '../delet/page'
import Add from '../add/page'
import Edit from '../edit/page'

export default function Todo() {
	const [todos, setTodos] = useState([
		{
			id: '1',
			name: 'parviz',
		},
		{
			id: '2',
			name: 'said',
		},
		{
			id: '3',
			name: 'mamani',
		},
	])


	return (
		<>
		<div className='flex justify-around mt-[20px]'>
			<h1>Synch Todo</h1>   
			<Add todos={todos} setTodos={setTodos}/>
		</div>
			<table className='w-[80%] m-auto text-center mt-[40px]'>
				<thead>
					<tr >
						<th>id</th>
						<th>name</th>
						<th>action</th>
					</tr>
				</thead>
				<tbody>
					{todos.map(el => (
						<tr key={el.id}>
							<td>{el.id}</td>
							<td>{el.name}</td>
							<td>
								<div className='flex gap-[10px] justify-center'>
									<DeletTodo id={el.id} todos={todos} setTodos={setTodos}/>
							<Edit el={el} todos={todos} setTodos={setTodos}/>
									
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
