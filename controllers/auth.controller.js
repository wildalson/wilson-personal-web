require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.ACCESS_TOKEN_SECRET;

exports.register = (req,res,next)=>{
	const {nickname, password, email} = req.body;
	// Simple Validation
	if(!nickname || !password || !email){
		return res.status(400).json({msg: "Please enter all fields"});
	}
	
	User.findOne({email: email})
	.then(foundUser =>{
		// Check for existing users using this email
		if(foundUser)
		{
			return res.status(400).json({msg: "User already exists"});
		}
		const newUser = new User({
			nickname: nickname,
			password: password,
			email: email,
			access: "BASIC"
		})
		// auto generate salt and hash in a single function
		bcrypt.hash(newUser.password,10,function(err,hash){
			newUser.password = hash;
			newUser.save()
			.then(savedUser =>{
				res.status(200).json({
					msg: "succesfully registered",	
					user:{
						id:savedUser.id,
						nickname: savedUser.nickname,
						password: savedUser.password,
						email: savedUser.email,
						access: savedUser.access
					}
				})
				})
			})
		});	
}
exports.login = (req,res,next)=>{
	const {password, email} = req.body;
	console.log(req.headers);
	// Simple Validation if email and pass exists
	if(!password || !email){
		return res.status(400).json({msg: "Please enter all fields"});
	}
	User.findOne({email: email}).select("+password")
	.then(foundUser =>{
		if(!foundUser)
		{
			return res.status(400).json({msg: "Username not found" });
		}
		// bcrypt.compare(plaintextpassword, hashfromDB)
		// Compare password, returned promise holds a boolean variable in this case the variable isMatch.
		//Authenticate User password bcrypt(plain-text pass, hashsed password from DB)
		bcrypt.compare(password, foundUser.password,(err,isMatch)=>{
			if(!isMatch){res.status(401).json({msg:"password incorrect!!!"})}
			//send a token back
			jwt.sign({id: foundUser.id},jwtSecret,{expiresIn:"30d"},(err,token)=>{
				if(err) throw err;
				res.status(200).json({
					accessToken: token
					// authenticated: true,
					// user:{
					// 	id:foundUser.id, 
					// 	nickname:foundUser.nickname, 
					// 	email:foundUser.email}
				});
			})
		})
	})
}

exports.forgotpassword = (req,res,next)=>{
	res.send("forgot password");
}

exports.resetpassword = (req,res,next)=>{
	res.send("reset password");
}

exports.decodetoken = (req,res,next)=>{
	let token;
	if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
		token =  req.headers.authorization.split(" ")[1];
			const decoded =	jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
			res.json(decoded.id);
			try{
				User.find({_id:decoded.id})
				.then(foundUser =>{
					console.log(foundUser);
					req.user = foundUser;
					next();
				})
			}catch(e){
				return res.status(403).json({msg: "user not found"});
			}
		
			return res.status(401).json({msg: "Token expired!!!"});
				// res.send(foundUser);
	}	
}

// exports.setadminpassword((req,res)=>{
	
// })



exports.getuserprofile = (req,res,next) =>{
	const user =req.user;
	res.status(200).json(user);
}


exports.createposts = (req,res,next) =>{
	const {email,posts} = req.body;
	console.log(req.body)

	User.findOneAndUpdate({email}, {$push: {posts:posts}},{new:true})
	.then(()=> res.status(200).json({msg:"succcesfully added post!"}))
	.catch(err => res.status(500).json({msg: "error updating internal error" + err}));
}
exports.getpost = (req,res,next) =>{
	const {email} = req.body;

	User.findOne({email})
	.then(foundUser => res.status(200).json(foundUser.posts))
	.catch(err => res.json (err));
}
exports.deletepost = (req,res,next) =>{
	const {email, postId} = req.body;

	console.log(req.body)
	console.log(req.headers);
	console.log(email)
	console.log(postId)
	User.findOneAndUpdate({email}, {$pull: {posts:{_id: postId}}}, {new:true})
	.then(()=> res.status(200).json({msg:"successfully deleted post!"}))
	.catch(err =>res.json({msg:"user not found"}));

}
exports.deletetesting = (req,res,next) =>{
	res.json("del testing");
}

exports.createadmin = (req,res,next) =>{

	const adminUser = new User({
		nickname: req.body.nickname,
		email: req.body.email,
		password: req.body.password,
		access: req.body.access
	})

	User.findOne()
	bcrypt.hash(adminUser.password, 10 , function(err,hash){
		adminUser.password = hash;
		adminUser.save();
		
	} )
	
}