import mongoose from "mongoose";

const connectionDb = async()=>{
    try {
     await mongoose.connect('mongodb://localhost:27017/occasionHub')
     console.log("Database Connected")
    } catch (error) {
        console.log("error while connecting database", error.message)
    }
}

export default connectionDb