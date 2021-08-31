

const mongoose = require("mongoose");

const personalprofileSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	age: Number,
	location: String,
	degree: String,
	number: String,
	email: String,
	level: String,
})

const PersonalProfile = mongoose.model("personalprofile", personalprofileSchema);


module.exports  = PersonalProfile;