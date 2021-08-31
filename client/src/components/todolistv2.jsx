import React,{useState,useEffect} from "react";
import Heading from "./heading.list.component";
import Note from "./note.component";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
function Todolistv2()
{
	const [dblist, setdblist] = useState([]);
	const [input,setInput] = useState("");
	const [test, setTest] = useState(new Date());

	useEffect(()=>
	{
		axios.get("/todolist/getlist")
		.then(result => {
			console.log(result);
			setdblist(result.data);
		})
	},[input,test]);

	function handleChange(event)
	{
		const usrInput = event.target.value;
		setInput(usrInput);	
	}
	function handleSubmit(event)
	{
		event.preventDefault();
		
		axios.post("/todolist/updatelist", {name:input})
		.then(result =>{
			console.log(result);
		})

		setInput("");

	}

	function handleDelete(id)
	{
		axios.delete(`/todolist/deletelist/${id}`)
		.then(result => {
			console.log("succesfully deleted item");
			setTest(new Date());
		})

		.catch(error => console.log(error));
	}


	return(	<div className = "todolist-v2">
	<Heading title = "To Do list(using MongoDB Atlas)"/>
	{dblist.map((element,index) => <Note item = {element.name} key = {uuidv4()} id={element._id} itemDelete ={handleDelete}/>)}
	<div className = "input-area">
		<form onSubmit={handleSubmit} >
		<input name = "input" placeholder = "input something..." onChange={handleChange} value = {input}/>
		<button className = "btn-list" type = "submit" >+</button>
		</form>
		</div>
	</div>);
}


export default Todolistv2;