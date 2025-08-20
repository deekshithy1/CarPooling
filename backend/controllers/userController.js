const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt")
const asyncHandler = require("express-async-handler"); // ensure you imported this

const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
 console.log(req.body)

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "No user found with this Email" });
  }


  const isCorrectPass = await user.comparePassword(password);
  if (!isCorrectPass) {
    return res.status(400).json({ message: "Wrong Password" });
  }


  const token = jwt.sign(
    { id: user._id }, 
    process.env.JWT_SECRET, 
    { expiresIn: "24h" }
  );

  res.status(200).json({
    user: {
      id: user._id,
      email: user.email,
      fullName: user.Name,
    },
    token,
  });
});

const Signup=asyncHandler(async(req,res)=>{
    const {Name,password,mobileNumber,email}=req.body;
    const user=await User.find({email:email}||{mobileNumber:mobileNumber});
    if(user){
        res.status(409).json({message:"Details already exist"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    const newUser = new User({
      Name,
      email,
      mobileNumber,
      password: hashedPassword,
    });
  
    await newUser.save();
  
    res.status(201).json({ message: "User registered successfully" });
})


const getLoggedInuser=asyncHandler(async(req,res)=>{
       let user=await User.findById(req.user.id).select("-password");
       if (!user) {
        res.status(404);
        throw new Error("User not found");
      }
      res.json(user);
    
})
module.exports ={ Login,Signup};
