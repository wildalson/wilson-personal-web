
const mongoose = require("mongoose");


const gameSchema =  new mongoose.Schema({
	name: {type:String},
	cleartime: {type:String},
	cleardate: {type: String}	
});

const UsersRanking =  mongoose.model("UsersRanking", gameSchema);


module.exports = UsersRanking;