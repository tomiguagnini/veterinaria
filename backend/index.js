import  express  from "express";
import "./database.js"
import userRoutes from "./routes/users.js"


const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use("/api",userRoutes);


app.listen(port)

app.get('/',(req,res)=> res.send("servidor veterinaria"))