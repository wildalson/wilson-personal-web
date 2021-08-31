
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	title:"",
	post:"",
})
const userSchema = new mongoose.Schema({
	nickname: {type:String},
	password: {type: String, select: false},
	email: {type: String, unique:true},
	access: {type: String},
	posts: [postSchema]
})

const User = mongoose.model("User", userSchema);

module.exports = User;
