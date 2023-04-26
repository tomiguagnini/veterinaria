import app from "./src/app.js"
import "./src/config/database.js"

const { PORT } = process.env;

app.listen(PORT,()=>console.log("listen on port", PORT))

