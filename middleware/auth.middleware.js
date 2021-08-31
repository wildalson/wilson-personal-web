

require("dotenv").config();
const jwt = require("jsonwebtoken");

const User = require("../models/user");

function auth(req,res,next){
	
	let token;
	if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
		token =  req.headers.authorization.split(" ")[1];
			
			try{
				const decoded =	jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
				User.find({_id:decoded.id})
				.then(foundUser =>{
					req.user = foundUser;
					next();
				})
			}catch(e)
			{
				return res.status(404).send({msg:"user not found"});
			}
	
	}	
	else{
		return res.status(401).send({msg:"unauthorized access"});
	}

	// console.log(token);
	
	// res.status(401).json({msg:"unauthorized access"});
	// if(token){
	// 	res.status(200).json({msg:"tken"});
	// }
	
}


module.exports = auth;
