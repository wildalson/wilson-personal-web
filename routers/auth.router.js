

const express = require("express");
const router = express.Router();

const {register, login, resetpassword, forgotpassword, getuserprofile, createposts, getpost,deletepost,createadmin } = require("../controllers/auth.controller");

// auth middleware used to check if the user has a valid token or not, received data will be set to req.user
const auth = require("../middleware/auth.middleware");


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/checktoken").get(auth,getuserprofile)

router.route("/createpost").post(createposts)

router.route("/getpost").get(getpost)

router.route("/deletepost").post(deletepost)

router.route("/createadmin").post(createadmin)

// router.route("/resetpassword").post(resetpassword);

// router.route("/forgotpassword/:resetToken").post(forgotpassword)

module.exports = router;