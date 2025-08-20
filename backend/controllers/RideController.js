

const asyncHandler=require("express-async-handler");
const Ride = require("../models/Ride");


const createRide=asyncHandler(async(req,res)=>{
        const {from,to,fare,seatsAvailable,DateOfJourney,Time}=req.body;

        const combinedDateTime = new Date(`${DateOfJourney}T${Time}:00.000Z`);
        console.log(combinedDateTime);
        const ride=new Ride({
              from,to,fare,seatsAvailable,DateOfJourney,Time,offeredBy:req.user.id
        });
        await ride.save();

        res.status(200).json({message:"Ride create Successfully"});
});
const getAllRidesByJourney=asyncHandler(async(req,res)=>{

  const {from,to,DateOfJourney}=req.query;
  const startofDay = new Date(DateOfJourney);
  startofDay.setHours(0, 0, 0, 0);

  const endofDay = new Date(DateOfJourney);
  endofDay.setHours(23, 59, 59, 999);
  const ride=await Ride.find({
     from:{$regex:from,$options:"i"},
     to:{$regex:to,$options:"i"},
   DateOfJourney:{
    $gte:startofDay,
    $lte:endofDay,

   }
  })
  if(!ride.length){
   res.status(400).json("No rides found")
  }
  

  res.json(ride);


})
const BookRide=asyncHandler(async(req,res)=>{

})
module.exports={createRide,getAllRidesByJourney}