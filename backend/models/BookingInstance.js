

const mongoose=require("mongoose");

const BookingInstanceSchema=mongoose.Schema({
            
    RideId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Ride",
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
  



})
const BookingInstance=mongoose.model("BookingInstance",BookingInstanceSchema);
module.exports=BookingInstance;