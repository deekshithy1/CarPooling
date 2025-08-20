const mongoose=require("mongoose");

const RideSchema= mongoose.Schema({
    
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    fare:{
        type:Number,
        required:true,
    },
    seatsAvailable:{
        type:Number,
        required:true
        
    },
    seatsTaken:{
        type:Number
    },
    DateOfJourney: {
        type: Date,
        required: true,
      },
      Time: {
        type: String, 
        required: true,
      }
      ,
    offeredBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    RideStatus:{
          type:String,
          enum:["NOT_STARTED","STARTED"],
          default:"NOT_STARTED"
    }

})


const Ride=mongoose.model("Ride",RideSchema)
module.exports=Ride;