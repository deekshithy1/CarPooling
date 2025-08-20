const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Ride = require("../models/Ride");
const BookingInstance = require("../models/BookingInstance");

const BookRide = asyncHandler(async (req, res) => {
  const { RideId, passengers } = req.body;
  console.log("RideId:", RideId);

  // find the ride
  const ride = await Ride.findById(RideId);

  if (!ride) {
    return res.status(400).json({ message: "No Ride Found with the given ID" });
  }

  // check seat availability
  if (ride.seatsAvailable < passengers) {
    return res.status(400).json({ message: "Not enough seats available" });
  }

  // create booking
  const newBooking = await BookingInstance.create({
    RideId: ride._id,
    passengers,
    User: req.user.id,   // requires auth middleware to set req.user
  });

  // update available seats
  ride.seatsAvailable -= passengers;
  await ride.save();

  res.status(201).json({
    message: "Booking successful",
    booking: newBooking,
    updatedRide: ride,
  });
});

module.exports = { BookRide };
