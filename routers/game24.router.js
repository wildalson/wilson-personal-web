const router = require("express").Router();

const {deleterank, updaterank} = require("../controllers/game24.controller")

router.route("/updaterank").post(updaterank);

router.route("/deleterank").delete(deleterank);

module.exports = router