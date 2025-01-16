import express from "express";
import connectionDb from "./src/config/db.connect.js";
import router from "./src/routes/authUerRoutes.js";

const app = express()

const PORT = 4000


app.use(express.json())

app.use('/api', router)

app.use('/',(req, res)=>{
    res.send("Health check")
})
connectionDb()

app.listen(PORT, ()=>{
    console.log(`server started ${PORT}`)
})