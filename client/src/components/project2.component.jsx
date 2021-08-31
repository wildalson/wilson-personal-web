import React,{useState,useEffect} from "react";
// import { loadProgressBar } from 'axios-progress-bar';
import AddIcon from "./icons/add.icon";
import SubtractIcon from "./icons/subtract.icon";
import DivideIcon from "./icons/divide.icon";
import MultiplyIcon from "./icons/multiply.icon";
import SubmitIcon from "./icons/submit.icon";
import axios from "axios";
function Project2(){
	
	const [list, setList] = useState([{num:0, isClicked: false},{num:0, isClicked: false},{num:0, isClicked: false},{num:0, isClicked: false}]);
	const [eq, setEq] = useState(""); // where we store the arithmetic expressions
	const [timer, setTimer] = useState(0);
	const [status, setStatus] = useState(false);	
	const [running,setRunning] = useState(false);
	// const [intervalState, setIntervalState] = useState(null);
	const [user, setUser] = useState("");
	const [usrInput, setInput] = useState("");
	const [result,setResult] = useState("");
	const [usrList, setusrList] = useState([]);
	const [count, setCount] = useState(0);
	
	function createArray()
	{
		//let arr = [...Array(4)].map(() => Math.floor(Math.random() * 9));
		// setList(arr);
		
		// Create 4 random numbers, isClicked is used to limit the user from clicking the same num for more than once.
		// count prop for 
		let arr = Array.apply(null, Array(4)).map(()=> {
			return {num: Math.floor(Math.random()*9+1), isClicked:false, count:0} ;
		});
		setList(arr);
	}
	//custom styling for numbox divs when clicked
	
	const customStyle = {
		backgroundColor: "lightpink"
	}
	useEffect(()=>{
		
		let x = ("0"+ Math.floor((timer/1000)/60)).slice(-2);
		let y = ("0" + Math.floor((timer/1000)%60)).slice(-2);
		let z = x+":"+y;
		setResult(z);
		if(status)
		{
			createArray();
			setStatus(!status);
		}
		var intervalId;
		if(eq !== 24){
			if(running)
			{
				intervalId = setInterval(()=>{
					setTimer(prevValue => prevValue + 10);
				}, 10)
				// setIntervalState(intervalId);
			}
		}
		
		else{
			setusrList(prevValue => [...prevValue, {name: user, cleartime: result, cleardate:  new Date().toLocaleDateString()}]);
			console.log(result);
			console.log(usrList);
		}
		//unmount
		return ()=> clearInterval(intervalId);
	}		
	,[timer,status,running,eq]);
	
	
	function addTo(input)
	{
		setEq(prevValue => {
			return prevValue + input;
		});
	}
	function handleClick(event)
	{
		if(running && user !== "")
		{
			const whichnum = event.target.getAttribute("whichnum");
			const numIndex = Number(whichnum.substr(whichnum.length-1))-1;
			if(list[numIndex].count === 1){
				alert("You can only select a number once!!!");
			}
			else{
				addTo(list[numIndex].num.toString());
				list[numIndex].isClicked = true;
				list[numIndex].count++;
			}
			
		}
		else if(user === "")
		{
			alert("Please create your name first!!!");
		}
		else{
			alert("Please click start to begin the game!!!");
		}
		console.log(list);
	}
	//Arithmetic operations, adds the string value operators into the equation
	function add() {addTo("+");setCount(1);}
	function subtract()	{addTo("-");setCount(1);}
	function multiply() {addTo("*");setCount(1);}
	function divide(){addTo("/");setCount(1);}
	// Calculating whether the arithmetric expressions are equivalent to 24
	function calculate()
	{
		console.log("123");
		console.log(typeof eq);
		setEq(eval(eq));
		
	}
	//Starts the game
	function startGame()
	{
		if(user !== ""){
			const check = document.body.querySelector(".btn-start").innerText;
			if(check === "RESET"){
				setRunning(!running);
			}	
			else{
				setStatus(!status);
				setRunning(!running);
			}
		}
		else{
			alert("Please create your name first!!!");	
		}
	}
	/* User creation sect */
	
	function handleInput(event){
		setInput(event.target.value);
	}
	function createUser(){
		setUser(usrInput);
	}
	/* handling user ranking datas */
	function handleSave()
	{
		axios.post("/updaterank", usrList)
		.then(response => console.log(response))
		.catch(error => console.log("error"+error));
	}
	function handleReset()
	{
		setusrList([]);	
	}
	function handleHardReset()
	{
		axios.delete("/deleterank")
		.then(result => console.log(result))
		.catch(error => console.log("Error :" + error));
	}
	return(<div className = "project2-container">
	<div className = "game-24">
	<div className = "header-game">
	{ user === "" && <input name = "username"  onChange = {handleInput} value = {usrInput} placeholder = "Enter your name "></input>}
	{ user === "" && <button className = "btn-create" onClick = {createUser}>CREATE</button>}
	{ user !== "" && <h4> {user}</h4> }
	<h3>{("0" + Math.floor((timer/60000)%60)).slice(-2)}:
	{("0" + Math.floor((timer/1000)%60)).slice(-2)}	
	</h3>
	{!running ? <button className = "btn-start" onClick={startGame}> start </button> : 
	<button className = "btn-start" onClick={()=>{startGame();setTimer(0);setEq("");}}> reset </button>}
	</div>
	<div className = "equation"><h2>{eq !== 24 ? "Equation: " + eq : "Congratulations!!!"}</h2></div>
	<div className = "row first-row">
	<div className = "numbox numbox-1"  
	style = {list[0].isClicked ? customStyle : null} 
	onClick = {handleClick} 
	whichnum = "num1">
	{list[0].num}
	</div>
	<div className = "numbox numbox-2" 
	style = {list[1].isClicked ? {backgroundColor:"lightpink"} : null}
	onClick = {handleClick} 
	whichnum = "num2">
	{list[1].num}
	</div>
	</div>
	<div className = "row second-row">
	<div className = "numbox numbox-3" 
	style = {list[2].isClicked ? customStyle : null}
	onClick = {handleClick} 
	whichnum = "num3">
	{list[2].num}
	</div>
	<div className = "numbox numbox-4" 
	style = {list[3].isClicked ? customStyle : null}
	onClick = {handleClick} 
	whichnum = "num4">
	{list[3].num}
	</div>
	</div>
	
	
	<div className = "game-operators">
	<div className = "current-state">
	<div className = "operators eval-div" onClick = {calculate}><SubmitIcon/></div>
	</div>
	<div className = "operators add" onClick = {add}><AddIcon height={24} width = {24}/></div>
	<div className = "operators subtract" onClick = {subtract} ><SubtractIcon/></div>
	<div className = "operators multiply" onClick = {multiply}><MultiplyIcon/></div>
	<div className = "operators divide" onClick = {divide}><DivideIcon/></div>
	</div>
	{/* <p>{result}</p> */}
	</div>
	<div className = "leaderboard">
	<header>
	<h2>Ranking</h2>
	</header>
	<table className = "ranking-table">
	<thead>
	<tr>
	<td style = {{textAlign: "left"}}>User</td>
	<td>Clear Time</td>
	<td>Date Cleared</td>
	</tr>
	
	</thead>
	<tbody>
	
	{usrList.map((element,index) =>
		<tr key = {index}>
		<td style = {{textAlign: "left"}}>{element.name}</td>
		<td>{element.cleartime}</td>
		<td>{element.cleardate}</td>
		</tr>
	)}
	<tr></tr>
	</tbody>
	</table>
	<footer className = "ranking-footer">
	<button className = "btn-save" onClick = {handleSave} >SAVE</button>
	<button className = "btn-reset" onClick = {handleReset}>RESET</button>
	<button className = "btn-hard" onClick = {handleHardReset}>HARD RESET</button>
	</footer>
	</div>
	</div>)
	}
	
	export default Project2;