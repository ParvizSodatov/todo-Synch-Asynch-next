'use client'

import { API } from '@/utils/api'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'

import axios from 'axios'
import { Borel } from 'next/font/google'
import { useEffect, useState } from 'react'

export default function Asynch() {
	const [data, setData] = useState([])
	const [addName, setAddName] = useState('')
	const [editName,setEditName]=useState('')
	const [open, setOpen] = useState(false)
	 const [idx,setIdx]=useState('')
	// console.log('API',API);


	async function Get() {
		try {
			let { data } = await axios.get(`${API}/api/categories`)
			console.log(data)

			return setData(data.data)
		} catch (error) {}
	}

	async function deletCategory(id) {
		try {
			await axios.delete(`${API}/api/categories?id=${id}`)
			Get()
		} catch (error) {
			console.log(error)
		}
	}

	async function addCategory() {
		try {
			await axios.post(`${API}/api/categories`, {
				name: addName,
			})
			Get()
			setAddName('')
		} catch (error) {
			console.log(error)
		}
	}
  

	async function editCategory() {
		try {
			await axios.put(`${API}/api/categories`,{
				name:editName,
				id:idx
			})
			Get()
			setOpen(false)
		} catch (error) {
			console.log(error);
			
		}
	}
	const handleClickOpen = (el) => {
		setOpen(true)
		setEditName(el.name)
		setIdx(el.id)
	}
	const handleClose = () => {
		setOpen(false)
	}
	useEffect(() => {
		Get()
	}, [])

	return (
		<>
		<div className='flex justify-around w-[90%] items-center '>

			<h1 className='text-[40px] font-bold'>ASynch</h1>
			<div className='flex gap-[5px]' >

			<Button variant='outlined' onClick={addCategory}>+Add</Button>
			<input
				type='text'
				value={addName}
				onChange={e => setAddName(e.target.value)}
				className='border-[1px] border-solid border-white'
			/>
			</div>
		</div>
			<table className='w-[50%] m-auto text-center'>
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>action</th>
					</tr>
				</thead>
				<tbody>
					{data?.map(el => (
						<tr key={el.id}>
							<td>{el.id}</td>
							<td>{el.name}</td>
							<td>
								<div className='flex justify-center gap-[10px]'>
									<Button
										variant='contained'
										color='error'
										onClick={() => deletCategory(el.id)}
									>
										Delete
									</Button>
									<Button variant='contained' color='primary' onClick={()=>handleClickOpen(el)}>
										Edit
									</Button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
				<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent sx={{ paddingBottom: 0 }}>
					<DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText>
					
						<TextField
							autoFocus
							required
							margin='dense'
							id='name'
							name='name'
							value={editName}
							onChange={(e)=>setEditName(e.target.value)}
							label='Edit Name'
							type='text'
							fullWidth
							variant='standard'
						/>
						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button type='submit' onClick={editCategory}>Subscribe</Button>
						</DialogActions>
			
				</DialogContent>
			</Dialog>
		</>
	)
}
