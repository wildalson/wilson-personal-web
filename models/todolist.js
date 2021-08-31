
const mongoose = require("mongoose");


const itemSchema  =  new mongoose.Schema({
	name: {type: String}},
	{timestamps:true
}
);

const Item = mongoose.model("Item", itemSchema);


module.exports = Item;