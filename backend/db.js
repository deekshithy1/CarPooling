const mongoose=require("mongoose");

const connectToDb=async()=>{
    mongoose.connect(process.env.MONGO_URL).then(console.log("Db connected"));
}


module.exports=connectToDb;