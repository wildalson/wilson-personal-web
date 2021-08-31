import React  from "react";

import Todolistv1 from "./todolistv1";
import Todolistv2 from "./todolistv2";
function Project1(props){

	//Todolistv1 a todo app using virtual dom
	//Todolistv2 a todo app with database (Mongo Atlas)
	return(<div className = "project-container">
	<Todolistv1 />    
	<Todolistv2 />
	</div>
	)
}

export default Project1;