import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'

export default function Edit({el,todos,setTodos}) {
	const [open, setOpen] = useState(false)
   const [editName,setEditName]=useState('')
   const [idx,setIdx]=useState('')


	const handleClickOpen = (el) => {
		setOpen(true)
		setEditName(el.name)
		setIdx(el.id)
	}
	const handleClose = () => {
		setOpen(false)
	}
	function handleEdit(){
		const updateUser=todos.map((el)=>el.id==idx?{...el,name:editName}:el)
		setTodos(updateUser)
		setEditName('')
		setOpen(false)
		
	}



	return (
		<>
			<Button variant='contained' onClick={()=>handleClickOpen(el)}>
			edit
			</Button>
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
							<Button type='submit' onClick={handleEdit}>Subscribe</Button>
						</DialogActions>
			
				</DialogContent>
			</Dialog>
		</>
	)
}
