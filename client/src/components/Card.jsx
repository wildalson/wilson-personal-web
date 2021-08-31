import React from 'react'

function Card({component: Component,height, width,headerTitle, info, content }) {
	return (
		<div className = "card-info">
			<header>
				<h2>{headerTitle}</h2>
			</header>			
			<Component height = {height} width = {width}/>
			<footer>
				<h4 style = {{textAlign:"center"}}>{info}</h4>
				<p>{content}</p>
			</footer>
		</div>
	)
}

export default Card