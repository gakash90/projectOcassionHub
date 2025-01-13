import express from 'express'


const app = express()
const PORT = 8080

app.use('/',(req, res)=>{
    res.send("Hello")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})