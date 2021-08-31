import React,{useState,useEffect} from "react";
import axios from "axios";
import Modal from "./modal.login"
import LinkedinIcon from "./icons/linkedin.icon"
import GithubIcon from "./icons/github.icon"
function Home(props){
	const uri = process.env.REACT_APP_URI;
	const [isAdmin, setAdmin] = useState(false);
	const [isClicked,setClicked] = useState(false);
	const [isOpenPortal, setOpenPortal] = useState(false);
	const [profile, setProfile] = useState({
		// name: "Wilson Co",
		// age: 28,
		// location: "Bulacan",
		// degree: "Vocational",
		// number: "09952953542",
		// level: "Junior",
		// email:"wilsondaitoco@gmail.com"
	})
	useEffect(()=>{
		axios.get("/info/getprofile")
		.then(response => {
			console.log(response);
			setProfile(response.data)
			
		})
	},[])

	function handleEdit()
	{
		setClicked(!isClicked);
		
	}
	function handleSave(event)
	{
		if(!isAdmin){
			setOpenPortal(true);
		}	
		else{
			axios.post("/info/updateprofile", profile)
			.then(()=> console.log("saved"))
			.catch(error => console.log("Error + " + error));
			setClicked(!isClicked);
		}
	}
	function handleChange(event)
	{
		const {name, value} = event.target;
	
		setProfile(prevValue =>{
			return{
				...prevValue,
				[name]:value
			}
		})
	}

	return(<div className = "home">
	<Modal 
	open = {isOpenPortal} 
	setAdminTrue = {()=> setAdmin(true)}  
	onClose = {()=>setOpenPortal(false)}
	 />	
	<header className="header-home">
	<h1>BASIC INFO</h1>	
	{!isClicked ? <button className="custom-btn btn-1" onClick ={handleEdit}>EDIT INFO</button> :
	<button className = "custom-btn btn-1" onClick = {handleSave}>SAVE INFO</button>}
	</header>
	<div className = "main">
	<div className = "aside left-aside">
	<h3>PROFESSIONAL DETAILS</h3>
	<img className = "profile-pic" src = "../images/photo.jpeg" alt = "profile-pic"></img>
	<div className = "social-media-icons">
	<div className = "linkedin-icon">
	<a href = "https://www.linkedin.com/in/wilson-daito-co-947735192">
	<LinkedinIcon />
	</a>
	</div>
	 
	<div className = "github-icon">
		<a href = "https://github.com/wildalson"><GithubIcon/></a>
	</div>
	</div>
	

	<table >
	</table>
	</div>
	<div className = "aside right-aside">
	<div className = "header-intro">
	<h3>ABOUT ME</h3>	
	</div>

	<div className = "content-1">
	<table className = "table-details">
		<tbody>
			<tr>
				<td>NAME</td>
				{isClicked ? <td><input name = "name" style={{width:"80px"}} onChange = {handleChange} defaultValue ={profile.name} ></input></td>:<td>{profile.name}</td>}
			</tr>
			<tr>
				<td>LOCATION</td>
				{isClicked ? <td><input name = "location" style={{width:"80px"}} onChange = {handleChange} defaultValue = {profile.location}/></td> :<td>{profile.location}</td>}

			</tr>
			<tr>
				<td>DEGREE</td>
				{isClicked ? <td><input name = "degree" style={{width:"80px"}} onChange = {handleChange} defaultValue = {profile.degree}></input></td> :<td>{profile.degree}</td>}
			</tr>
			<tr>
				<td>PHONE</td>
			{isClicked ? <td><input name = "number" style={{width:"80px"}} onChange = {handleChange} defaultValue= {profile.number}></input></td> :<td>{profile.number}</td>}
			</tr>
		</tbody>
	</table>	
	</div>
	<div className = "content-2">
	<table className = "table-details">
		<tbody>
			<tr>
				<td>AGE</td>
			{isClicked ? <td><input name = "age" style={{width:"80px"} } onChange = {handleChange} defaultValue = {profile.age}></input></td> :<td>{profile.age}</td>}
			</tr>
			<tr>
				<td>CAREER LEVEL</td>
				{isClicked ? <td><input  name = "level" style={{width:"80px"}} onChange = {handleChange} defaultValue = {profile.level}></input></td> :<td>{profile.level}</td>}

			</tr>
			<tr>
			<td>EMAIL</td>	
				{isClicked ? <td><input name = "email" style={{width:"80px"}} onChange = {handleChange} defaultValue = {profile.email}></input></td> :<td>{profile.email}</td>}
			</tr>
		</tbody>
	</table>	

	</div>	

	</div>
	</div>

	
	<footer> footer </footer>
	
	
	<p>home component</p>
	</div>)
}


export default Home;

