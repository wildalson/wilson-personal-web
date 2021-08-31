import React from "react";

function Heading(props)
{
	return(
		<header className = "heading-list">
			<h3> {props.title}</h3>
		</header>
	)	
}

export default Heading;