import React from 'react'
import {Route, Redirect} from "react-router-dom";


function ProtectedRoute({ component: Component,isAuth, path, ...rest}) {
	return (
		<Route {...rest} render ={props=>{
			if(sessionStorage.getItem("accessToken")){
				return <Component />
				// return <Redirect to = "/profile" {...rest}/>
			}	
			else{
				return	(<Redirect to = {{
					pathname: "/portfolio/project3",
					state: {
						prevLocation: path,
						error: "you have not yet logged in"
					}
				}}/>)
			}
		}}/> 
	);
}

export default ProtectedRoute;
