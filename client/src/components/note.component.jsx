import React, { useState } from "react";

function Note(props)
{

	const [isChecked, setChecked] = useState(false);
	
	const customStyle = {
		textDecoration: "line-through",
		color: "black",
	}
	function handleChange (event)
	{
		console.log(event.target.name);
		console.log(event.target.checked);
		const status = event.target.checked;
		console.log(status);
		setChecked(!isChecked);
		if (props.version ==="v1")
		{
			if(status)
			{
				console.log("checkbox true");
				props.itemDelete(props.id);
			}
		}
		else{
			console.log("v2");
			props.itemDelete(props.id);
			console.log("1");
		}

		
	}
	return(<div>
		<form className = "items-box" action = "/delete" method ="POST">
		<input 
		type = "checkbox" 
		name = "checkbox" 
		// value = {props.itemId} 
		// checked = {isChecked}
		checked = {isChecked} 
		onChange = {handleChange}
			
		/>
		<p
		style = {isChecked ? customStyle : null}
		> {props.item}</p>
		{/* <p> {(isChecked === true) ? "yes" : "no"}</p> */}
		</form>

	</div>)
}


export default Note;

