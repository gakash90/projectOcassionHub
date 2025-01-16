
import User from "../models/user.model.js";
import logger from "../utils/logger.js";

export const userService = async(userData)=>{
    try {
        const {username, email, password} = userData
        logger.info(`Checking if user exists: username=${username}, email=${email}`);    
        const isExisting = await User.findOne({email})
        if(isExisting){
            logger.error(`user already registered ${email}`)
            throw new Error("User already registered")
        }

        const userNameTaken = await User.findOne({username})

        if(userNameTaken){
            logger.error(`username already taken ${username}` )
            throw new Error("USername already taken")
        }
        
        const newUser = User({
            username,
            email,
            password
        })
       
        // await newUser.save()

        logger.info(`User registered Successfully ${email}`)

        return newUser
    } 
        catch (error) {

            logger.error(`Error in the registering user ${error.message}`, error)
            throw new Error(`Error in Regsitering the User ${error.message}`)
    }
}