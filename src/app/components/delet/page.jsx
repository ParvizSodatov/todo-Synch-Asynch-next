export default function DeletTodo({todos,id,setTodos}){

  function handleDelet(){
	const data=todos.filter((el)=>el.id!=id)
	   setTodos(data)
  }
	return <>
	<button onClick={handleDelet} className='bg-red-500 text-white px-[7px]'>
		Delete
	</button>
	
	</>
}