
const PersonalProfile = require("../models/personalprofile");
const User = require("../models/user");
const bcrypt = require("bcrypt");


exports.getprofile = (req,res)=>{
	PersonalProfile.findOne({_id:1})
	.then(foundPersonalProfile=>{
		res.json(foundPersonalProfile);
	})
	.catch(error => console.log("error"+ error));
}

exports.updateprofile = (req,res)=>{
	const receivedData = req.body;
	PersonalProfile.findByIdAndUpdate({_id:1}, {$set: receivedData}, { new: true })
	.then(()=> res.status(200).json({msg:"succesfully updated profile"}))
	.catch(error => console.log("error"+ error));
}

exports.checkadminpassword = (req,res)=>{
	const password = req.body.password;
	console.log(password);
	User.findOne({email:"wilson@gmail.com"}).select("+password")
	.then(foundUser => {
		bcrypt.compare(password,foundUser.password, (err,isMatch)=>{
			if(!isMatch) return res.status(401).json({msg:"incorrect admin password"});
			return res.status(200).json({match:true, msg:"successfully saved!!!"});
		})
	})	
	.catch(error => res.status(400).json({msg:"user not found"}))


	// User.findOne({email:"wilson@gmail.com"}).select("+password")
	// .then(foundUser => res.status(200).json(foundUser))
	// .catch(error => res.status(400).json(error+"error"));
}

exports.setpersonalprofile = (req,res)	=>{
	PersonalProfile.create(req.body)
	.then(createdUser => {res.status(200).json(createdUser)})
	.catch(error => res.status(500).json("error "+error));
}
