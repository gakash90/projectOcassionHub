import { userService } from "../services/userServices.js";
import { errorResponse } from "../utils/errorResponse.js";
import logger from "../utils/logger.js";
import { successResponse } from "../utils/successResponse.js";
export const userController = async(req, res)=>{
    const {email, username, password} = req.body
    try {
        logger.info(`Request to create or fetch user: ${username}, ${email}`)

        const newUser = await userService({email, username, password})

        const response = await successResponse("User already registered", 201, newUser)

       return res.status(response.status).json(response)

    } catch (error) {


        logger.error(`Error registering user with email: ${email}, username: ${username}`);
        logger.error(`Error details: ${error.message}`, error.stack);
        
        const response = errorResponse(error, 400, "Error registering the user.");
        return res.status(response.status).json(response);
        
    }
}