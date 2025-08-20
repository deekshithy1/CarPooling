const express=require("express");
const app=express();
const dotenv=require("dotenv");
const connectToDb = require("./db");
const userRoutes = require("./routes/userRoutes");
const RideRoutes=require("./routes/RideRoutes")
const cors=require("cors")
dotenv.config();
const PORT=process.env.PORT;
app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`);
})
app.use("/api/auth",userRoutes);
app.use("/api/Ride",RideRoutes);


connectToDb();