import express from 'express'
import { userController } from '../controllers/authUserController.js'

const router = express.Router()


router.post('/regsiter_user', userController)


export default router