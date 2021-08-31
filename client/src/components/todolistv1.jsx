import React, {useState, useEffect} from "react";
import Heading from "./heading.list.component";
import Note from "./note.component";
import {v4 as uuidv4} from "uuid";

function Todolistv1()
{

	const [list, setList] = useState([]);
	const [input, setInput] = useState("");
	useEffect(()=>{
		if(list.length === 0){
			setList([{id: uuidv4(), name: "default item 1"},{id:uuidv4(), name:"default item 2"},{id:uuidv4(), name:"default item 3"}]);	
		}
	},[list])
	
	function handleChange (event)
	{
		setInput(event.target.value);
	}
	function handleSubmit(event)
	{
		event.preventDefault();
		setList(prevValue => {return [...prevValue, {id:uuidv4(), name: input}]});
		setInput("");
		console.log(list);
	}
	function handleDelete(id)
	{
		setList(list.filter( element => {return element.id !== id;}));
	}
	return(
		<div className = "todolist-v1">
		<Heading title = "To Do List(Virtual DOM)"/>
		{list.map((element,index) => <Note version = "v1" item = {element.name} id={element.id} key = {uuidv4()} itemDelete = {handleDelete}
		/>)}
		<div className = "input-area">
		<form onSubmit={handleSubmit} >
		<input name = "input" placeholder = "input something..." onChange={handleChange} value = {input}/>
		<button className = "btn-list" type = "submit" >+</button>
		</form>
		</div>
		</div>
		);
	}
	
	
	export default Todolistv1;