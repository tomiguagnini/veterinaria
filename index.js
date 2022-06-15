import app from "./src/app.js"
import "./src/config/database.js"

const { API_PORT } = process.env;

const port = process.env.PORT ||API_PORT ;



app.listen(port,()=>console.log("listen on port", port))

