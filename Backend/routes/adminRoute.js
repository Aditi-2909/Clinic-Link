import express from 'express'
import { addDoctor } from '../controllers/adminController.js'
import uplod from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',uplod.single('image'),addDoctor)

export default adminRouter