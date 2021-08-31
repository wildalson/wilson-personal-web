
require("dotenv").config();
const path = require("path")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
// Create Server
const server = http.createServer(app);
// U
const uri = process.env.MONGO_ATLAS;
const  port = process.env.PORT || 5000;
// Connect to MONGO ATLAS
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, err =>{
	if(err) {console.log("Error: "  + err)}
	console.log("succesfully connected to mongo atlas db");
})
// mongoose.set('useCreateIndex', true);
app.set(express.static("public")); // for CSS stylings 
// app.set("view engine", "ejs"); // EJS if used
app.use(cors());
app.use(express.json());

// Routers
app.use("/info", require("./routers/personalprofile.router"));
app.use("/api", require("./routers/auth.router"));
app.use("/todolist", require("./routers/todolist.router"));
app.use("/game24", require("./routers/game24.router"))




// app.use(express.static(path.join(__dirname, "client/build")));
// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, "client/build", "index.html"));
// })
if(process.env.NODE_ENV === "production"){
	app.use(express.static(path.join(__dirname, "client/build")));
	// app.get("*", (req, res) => {
	// 	res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	// });
	app.get('/*', (request, response) => {
		response.sendFile(path.join(__dirname, "clientbuild", "index.html"));
	});
	
}


server.listen(port, err =>{
	if (!err){
		console.log(`succesfully connected to port ${port}`);
	}
})
