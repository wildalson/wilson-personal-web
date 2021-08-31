import React,{useEffect,useState} from 'react'
import {withRouter,useHistory} from "react-router-dom";
import axios from "axios";
import Posts from "./Posts";

function Profile({nickname,msg}) {
	const [postList, setPostList] = useState([]);
	const jsonConfig ={
		headers: {"content-type": "application/json"}
	}
	// const authConfig ={
	// 	headers: {Authorization: "Bearer " + sessionStorage.getItem("accessToken")},
	// }
	const [user,setUser] = useState({});
	const [userPost, setUserPost] = useState({
		id:"",
		title:"",
		post:"",
	})
	
	useEffect(() => {
		let source = axios.CancelToken.source();
		axios.get("/api/checktoken", {
		headers: {Authorization: "Bearer " + sessionStorage.getItem("accessToken")},
		cancelToken: source.token
		})
		.then(response => {
		// sessionStorage.setItem("nickname", nickname );
			setUser(response.data[0]);
			setPostList(response.data[0].posts);
		})
		.catch(error => console.log(error));
		// fetchData();
	return () => {source.cancel('Cancelled /api/checktoken request')};
	
}, [postList])
const history = useHistory();
function createPost()
{
	axios.post("/api/createpost", {email: user.email, posts: userPost})
	.then(response =>{
		alert(response.data.msg);
		setUserPost({title:"",post:""});
		console.log(response);
	})
	.catch(error => alert(error.response.data.msg));
}
function deletePost(id)
{
	// Using axios post for now as axios.delete doesn't take in object datas as params
	axios.post("/api/deletepost",{email:user.email, postId:id}, jsonConfig)
	.then(response =>{
		alert(response.data.msg);
	})
	.catch(err => alert(err.response.data.msg));
}
function handleChange(event)
{
	const {name, value} = event.target;
	setUserPost(prevValue => ({...prevValue, [name]:value}));	
}
return (
	<div className = "profile">
	<h2> Hi {user.nickname}</h2>
	
	{postList.map((element,index) =>(
		<Posts 
		key = {index}
		title ={element.title} 
		post = {element.post} 
		id = {element._id}
		onDelete = {deletePost}
		/>
		
		))}
		<label>Title</label>
		<input name = "title" onChange = {handleChange} value = {userPost.title}></input>
		<label>Content</label>
		<textarea name = "post" onChange = {handleChange} value = {userPost.post}></textarea>
		<button className = "btn-create" onClick = {createPost}>Create</button>
		<button className = "btn-create btn-logout" onClick = {()=>{
			sessionStorage.clear();
			history.push("/portfolio/project3");
		} }> Log out</button>
		</div>
		)
	}
	
	export default withRouter(Profile);
	