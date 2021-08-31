
const router = require("express").Router();

const {getlist,updatelist,deletelist} = require("../controllers/todolist.controller");


router.route("/getlist").get(getlist);

router.route("/updatelist").post(updatelist);

router.route("/deletelist/:id").delete(deletelist);

module.exports = router;