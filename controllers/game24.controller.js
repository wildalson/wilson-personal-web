
const UsersRanking = require("../models/game24");


exports.updaterank = (req,res) =>{
	const receivedData = req.body;
	receivedData.forEach(element =>{
		new UsersRanking(element).save();
	})
}

exports.deleterank = (req,res) =>{
	UsersRanking.deleteMany({}, function(err){
		if(!err){
			console.log("hard reset");
		}
	})
}