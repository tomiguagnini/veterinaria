import express from "express";
import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const router = express.Router();


router.post("/register",async (req,res)=>{
    
    const {name, lastname, email, password,} = req.body;
    

    // Validate user input
    if (!(email && password && name && lastname )) {
        res.status(400).json({msg:"All input is required"});
    }      
    
    // check if user already exist
    
    const oldUser =  await User.findOne({ email });
    
    if (oldUser) {
        return res.status(409).json({msg:"User Already Exist. Please Login"});
    }

    //Encrypt user password    
    const encryptedPassword = await bcrypt.hash(password, 10)
    
    //Create user
    const newUser = User({
        name,
        lastname,
        email: email.toLowerCase(),
        password:encryptedPassword,
    })

    // Create token
    const token = jwt.sign(
        { user_id: newUser._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

    // save user token
    newUser.token = await token;
        
    await newUser
    .save()
    .then(()=> {
        console.log("usuario creado");
        res.status(200)
        .json(newUser);
    })
    .catch((err)=>console.log(err))
    
})


router.post("/login",async (req,res)=>{
    try{
        const {email, password} = req.body;

        // Validate user input
        if (!(email && password)) {
        res.status(401).json({msg:"All input is required"});
        }

        // Validate if user exist in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
            expiresIn: "2h",
                }
            );
            // save user token
            user.token = token;

            // user
            await res.status(200).json(user);
        }
        res.status(400).json({msg:"Invalid Credentials"});
    }catch(err){
        res.status(500)
    }
})

router.post('/test',(req,res)=>{
   return res.status(200).json({msg:'ok'})
})



router.get("/getUser/:id",(req,res)=>{
    const {id} = req.params;
    User
    .findById(id)
    .then((data)=>res.json(data))
    .catch((err)=> console.log(err))
})


export default router;