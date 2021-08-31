import React,{useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login(props)
{

	const history = useHistory();
	const [register, setRegister] = useState(false);
	const [user, setUser] = useState({
		email:"",
		password:""
	})
	const headerJson = {
		"content-type": "application/json"
	}

	function handleChange(event){
		const {name, value} = event.target;
		setUser(prevValue => ({...prevValue, [name]: value}));
	}
	function handleSubmit(event)
	{
		event.preventDefault();
		if(register){
			axios.post("/api/register", user, {headers: headerJson})
			.then(response => {
				if(response.status === 200){
					const {msg,user} = response.data;
					sessionStorage.setItem("user",user);
					sessionStorage.setItem("nickname", user.nickname);
					sessionStorage.setItem("id", user.id);
					alert(msg);
					history.push("/portfolio/project3/profile");
				}
				
			})
			.catch(error => alert(error.response.data.msg));
		}
		else{
				// Logging in
			axios.post("/api/login", {email:user.email, password:user.password},{headers: headerJson})
			.then(response =>{
					sessionStorage.setItem("accessToken", response.data.accessToken);
					alert("logged in!!!"+JSON.stringify(response.data));
					if(response.status === 200){
					
						history.push("/portfolio/project3/profile");
					}
			})
			.catch(error => {
				console.log(error.response.data.msg);
				return alert(error.response.data.msg);	
			})
		}
	

	}
	return(<div className = "project3-form"> <form className = "form-group" onSubmit={handleSubmit}>
	{register &&<div><label>Name</label>
	<input name = "nickname" value = {user.name} onChange = {handleChange} autoFocus></input></div>}
	<label>Email</label>
	<input name = "email" value = {user.email} onChange = {handleChange} ></input>
	<label>Password</label>
	<input type = "password" name = "password" value = {user.password} onChange = {handleChange}></input>
	<button className = "btn3 btn-login" type = "submit">{register ? "Sign up" : "Log in"}</button>

	</form>
	{!register && <div className = "register"><p> New to Scrapper101?<br></br></p><p 
	onClick ={()=>{
	setRegister(!register);
	setUser({nickname: "", password:"", email:""});
	}}>Create an account now!</p></div>}

	</div>)
}


export default Login;