import userRoutes from "./routes/user-routes.js"
import patientsRoutes from "./routes/patient-routes.js"
import express  from "express";
import dotenv from"dotenv"
import auth from "./middleware/auth.js"
import cors from "cors"
import headers from "./middleware/headers.js"

dotenv.config()
const app = express()

app.use(express.json());
app.use(cors());

app.use("/api",headers,userRoutes);
app.use("/api",headers,patientsRoutes);


app.get('/',auth,(req,res)=> res.send("Servidor veterinaria"))


export default app;