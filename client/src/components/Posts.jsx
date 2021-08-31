import React from 'react'

function Posts({id, title, post, onDelete}) {
	return (
		<div key = {id}>
			<h3>{title}</h3>	
			<p>{post}</p>
			<button className = "btn-del" onClick = {()=> onDelete(id)}> DELETE</button>
		</div>
	)
}

export default Posts
