const router = require("express").Router();
const Item = require("../models/todolist");
const UsersRanking = require("../models/game24");



exports.getlist = (req,res) =>{
	
	const item1 = new Item({name:"default item 1"});
	const item2 = new Item({name:"default item 2"});
	const item3 = new Item({name:"default item 3"});
	const defaultItems = [item1,item2,item3];
	Item.find({})
	.then(foundList =>{
		if (foundList.length === 0){
			Item.insertMany(defaultItems)
			.then(result => res.json(result))
			.catch(err => res.status(400).send("err"+err));
		}
		else{
			res.json(foundList);
		}
	})
	.catch(err =>  res.status(400).send("error"+err));
}

exports.updatelist = (req,res) =>{
	const usrInput = req.body.name;
	const newItem = new Item({name:usrInput});
	newItem.save();
}

exports.deletelist = (req,res) =>{
	Item.findByIdAndDelete({_id:req.params.id})
	.then(() =>{res.send("succesfully deleted the user")})
	.catch(err =>{res.status(400).send("error: " + err)});
}

//da


/* Project 2  -  24点游戏 保存和清空数据*/
// router.route("/project2")
// .post((req,res)=>{
// 	const receivedData = req.body;
// 	receivedData.forEach(element =>{
// 		new UsersRanking(element).save();
// 	})
// })
// .get((req,res)=>{
// 	res.send("project2");
// })
// .delete((req,res)=>{
// 	UsersRanking.deleteMany({}, function(err){
// 		if(!err){
// 			console.log("hard reset");
// 		}
// 	})
// });
