
const router = require("express").Router();

const {checkadminpassword, getprofile, updateprofile,setpersonalprofile} = require("../controllers/personalprofile.controller");



router.route("/checkadminpassword").post(checkadminpassword);

router.route("/getprofile").get(getprofile);

router.route("/updateprofile").post(updateprofile);

// router.route("/setpersonalprofile").post(setpersonalprofile);

module.exports = router;

