import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
function Item(props){
	const uri = process.env.REACT_APP_URI
	const [input,setInput] = useState("");
	const history = useHistory();
	
	function handleSubmit(event)
	{
		event.preventDefault();
		if(props.name === "todolistv2")
		{
			axios.post(uri+"/portfolio", {name: input})
			.then(result =>  {
				console.log(result);
				
			})
			.catch(err => console.log("Error: " + err));
		}
		else{
			props.onAdd(input);
		}

		setInput("");
		history.push("/portfolio/project1");
	}
	function handleChange(event){
		setInput(event.target.value);
	}
	
	function redirectPage()
	{
		history.push("/portfolio/project2");
	}
	return(
		<div className = "input-area">
		<form onSubmit={handleSubmit} >
		<input name = "input" placeholder = "input sth..." onChange={handleChange} value = {input}/>
		<button className = "btn-list" type = "submit" >+</button>
		</form>
		<button onClick = {redirectPage}>+</button>
		</div>
		)
	}
	
	export default Item;