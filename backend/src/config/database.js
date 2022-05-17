import mongoose from "mongoose";

const uri = process.env.MONGO_URI;


const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose
.connect(uri,params)
.then((db)=>console.log("mongodb is connected to ", db.connection.host))
.catch((err)=> console.log(err))

