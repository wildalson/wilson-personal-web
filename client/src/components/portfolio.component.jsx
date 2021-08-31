import React from "react";
import {BrowserRouter as Router, useHistory} from "react-router-dom";
function Portfolio(){
	const history = useHistory();	
	function handleClick(event)
	{
		const usrInput = event.target.getAttribute("whichproject");

		history.push(`/portfolio/${usrInput}`);
	}
	function handleClickTemp(event)
	{
		history.push("/portfolio/project3/profile");
	}

	return(<Router>
		<div className = "portfolio">
		<div>
		<div className = "project-1" onClick={handleClick} whichproject = "project1"></div>
		<footer>To Do List</footer>
		</div>
		<div>
		<div className = "project-2" onClick={handleClick} whichproject = "project2"></div>
		<footer>24点游戏</footer>
		</div>	
		<div>
		<div className = "project-3" onClick={handleClickTemp} whichproject = "project3"></div>
		<footer>Authentication</footer>
		</div>
		
		<div>
		<div className = "project-4" onClick={handleClick} whichproject = "project4"></div>
		<footer>Guide to payroll taxes</footer>
		</div>


		<div>
			<footer></footer>
		</div>

		</div>
		</Router>)
	}
	
	
	export default Portfolio;
	
	