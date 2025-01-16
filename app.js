import express from "express";
import router from "./src/routes/authUerRoutes.js";

const app = express()

const PORT = 4000

app.use(express.json())

app.use('/api', router)

app.use('/',(req, res)=>{
    res.send("Health check")
})

app.listen(PORT, ()=>{
    console.log(`server started ${PORT}`)
})