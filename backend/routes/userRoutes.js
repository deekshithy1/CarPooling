const express = require("express");
const router = express.Router();
const {Login,Signup, getLoggedInuser} = require("../controllers/userController"); 
const { protect } = require("../middleWare/authMiddleWare");
// or: const { Login } = require("../controllers/userController");

router.post("/login", Login);
router.post("/signup",Signup)
router.get("/me",protect,getLoggedInuser)
module.exports = router;
