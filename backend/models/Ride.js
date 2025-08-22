const mongoose = require("mongoose");

const RideSchema = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  fromLocation: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  toLocation: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  fare: {
    type: Number,
    required: true,
  },
  seatsAvailable: {
    type: Number,
    required: true,
  },
  seatsTaken: {
    type: Number,
    default: 0,
  },
  DateOfJourney: {
    type: Date,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
  offeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  RideStatus: {
    type: String,
    enum: ["NOT_STARTED", "STARTED"],
    default: "NOT_STARTED",
  },
});

// ✅ Correct: create 2dsphere indexes for fromLocation and toLocation
RideSchema.index({ fromLocation: "2dsphere" });
RideSchema.index({ toLocation: "2dsphere" });

const Ride = mongoose.model("Ride", RideSchema);
module.exports = Ride;
