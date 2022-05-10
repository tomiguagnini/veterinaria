import mongoose from "mongoose";


const uri = "mongodb+srv://admin:guagnini@cluster0.nfono.mongodb.net/veterinaria?retryWrites=true&w=majority"
const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose
.connect(uri,params)
.then((db)=>console.log("mongodb is connected to ", db.connection.host))
.catch((err)=> console.log(err))

