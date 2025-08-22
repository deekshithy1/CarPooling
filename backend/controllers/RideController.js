

const asyncHandler=require("express-async-handler");
const Ride = require("../models/Ride");
const { getAddressCoordinate, getRidesWithinRange } = require("../services/mapsService");



const createRide = asyncHandler(async (req, res) => {
  const { from, to, fare, seatsAvailable, DateOfJourney, Time } = req.body;

  // Validate required fields
  if (!from || !to || !fare || !seatsAvailable || !DateOfJourney || !Time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Get coordinates
  const fromCoord = await getAddressCoordinate(from);
  const toCoord = await getAddressCoordinate(to);

  // Ensure coordinates are valid numbers
  if (
    !fromCoord ||
    !toCoord ||
    fromCoord.ltd == null ||
    fromCoord.lng == null ||
    toCoord.ltd == null ||
    toCoord.lng == null
  ) {
    return res.status(400).json({ message: "Invalid coordinates for from/to addresses" });
  }

  // Combine date and time
  const combinedDateTime = new Date(`${DateOfJourney}T${Time}:00.000Z`);

  // Create ride
  const ride = new Ride({
    from,
    to,
    fare,
    seatsAvailable,
    DateOfJourney: combinedDateTime,
    Time,
    offeredBy: req.user.id,
    fromLocation: { type: "Point", coordinates: [fromCoord.lng, fromCoord.ltd] },
    toLocation: { type: "Point", coordinates: [toCoord.lng, toCoord.ltd] }
  });

  await ride.save();
  res.status(201).json({ message: "Ride created successfully", ride });
});

// const getAllRidesByJourney=asyncHandler(async(req,res)=>{

//   const {from,to,DateOfJourney}=req.query;
//   const fromCoord = await getAddressCoordinate(from);
//   const toCoord = await getAddressCoordinate(to);
//   const startofDay = new Date(DateOfJourney);
//   startofDay.setHours(0, 0, 0, 0);

//   const endofDay = new Date(DateOfJourney);
//   endofDay.setHours(23, 59, 59, 999);
//   const rides=await getRidesWithinRange(fromCoord,toCoord,1000,DateOfJourney);

//   if(!rides){
//     res.jsos("No rides");
//   }


  
//   res.json(rides);


// })
const getAllRidesByJourney = asyncHandler(async (req, res) => {
  const { from, to, DateOfJourney } = req.query;
console.log(req.query);
  const fromCoord = await getAddressCoordinate(from);
  const toCoord = await getAddressCoordinate(to);
  console.log(fromCoord,toCoord)
  const rides = await getRidesWithinRange(fromCoord, toCoord, 20, DateOfJourney);

  if (!rides || rides.length === 0) {
    return res.json({ message: "No rides found" });
  }

  res.json(rides);
});

module.exports={createRide,getAllRidesByJourney}