import express from "express";
import User from "../models/User.js";
import UserSchema from "../models/User.js"
const router = express.Router();

const adminUser = {
    name:"admin",
    email:"admin@admin.com",
    password:"admin123",
    token:"asdasdasij123",
    phone:1234567,
    confim:true
}


router.post("/createUser",(req,res)=>{
    const user = UserSchema(req.body)
    
    user
    .save()
    .then(()=> console.log("usuario creado"))
    .catch((err)=>console.log(err))
    
    res.send("request create user");
})


router.get("/getAllUsers",(req,res)=>{
    UserSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error) => console.log(error))

})

router.get("/getUser/:id",(req,res)=>{
    const {id} = req.params;
    User
    .findById(id)
    .then((data)=>res.json(data))
    .catch((err)=> console.log(err))
})

export default router;