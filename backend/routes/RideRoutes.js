const express=require("express");

const { protect } = require("../middleWare/authMiddleWare");
const {createRide, getAllRidesByJourney} = require("../controllers/RideController");
const { BookRide } = require("../controllers/BookingController");
const router=express.Router();


router.post("/createRide",protect,createRide);
router.get("/getRideBySearch",getAllRidesByJourney)
router.post("/BookRide",protect,BookRide);
module.exports=router;