import React,{useState} from 'react'
import ReactDom from "react-dom"
import axios from "axios";
export default function Modal({setAdminTrue,open, onClose,handleSave}) {
	const MODAL_STYLES = {
		position: "fixed",
		top: "50%",
		left: "50%",
		backgroundColor: "#fff",
		transform:"translate(-50%,-50%)",
		border: "1px solid #000",
		zIndex: "1000",
		borderRadius: "6px",
		height: "60px",
		width: "250px",
		display: "flex",
		alignItems: "center",
		padding: "15px",
	}
	const OVERLAY_STYLES ={
		position: "fixed",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: "rgba(0,0,0,0.7)",
		zIndex:"1000",
	}
	const BTN_STYLES ={
		position:"absolute",
		right:0,
		top:0,
	}
	const INPUT_STYLES={
		// position:"absolute",
		// margin: "auto", 
	}
	const BTN_SUBMIT_STYLES={
		marginLeft: "5px",
	}
	const DIV_STYLES={

	}

	const [password, setPassword] = useState("");
	function handleChange(event){
		setPassword(event.target.value);
	}
	function handleClick(event)
	{
		axios.post("/info/checkadminpassword", {password: password} )	
		.then(response =>{
			if(response.status === 200){
				setAdminTrue();
				onClose();	
				return alert(response.data.msg);
			}
		})
		.catch(error => alert(error.response.data.msg));
	}

	if (!open) return null;
	return ReactDom.createPortal(
		<div style ={OVERLAY_STYLES}>
		<div style = {MODAL_STYLES}>
		<button  style = {BTN_STYLES} onClick = {onClose}>x</button>
		<div style = {DIV_STYLES}>
		<label style = {{display:"block"}}>Enter the admin password to save:</label>
		<input style = {INPUT_STYLES} type = "password" name = "adminpassword" onChange = {handleChange}></input>
		<button style= {BTN_SUBMIT_STYLES} onClick ={handleClick}> ENTER </button>
		</div>
		</div>
		</div>,document.getElementById("portal")
	)
}
