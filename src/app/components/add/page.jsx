import { useState } from 'react'
import Todo from '../todo/page'

export default function Add({todos,setTodos}) {
	const [addName, setAddName] = useState('')
	function handleAdd(){
		let newAddUser={
		  id: crypto.randomUUID(),
			name:addName,
		}
		setTodos([...todos,newAddUser])
		setAddName('')
	}
	return (
		<>
		<div className='flex gap-[8px]'>
			<button className='border-solid border-[1px] border-white px-[7px]' onClick={handleAdd}> +Add</button>
			<input type='text' className='border-solid border-[1px] border-white p-[7px]' value={addName} onChange={(e)=>setAddName(e.target.value)} />
		</div>
		</>
	)
}
