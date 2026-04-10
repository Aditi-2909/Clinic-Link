import express from 'express'  // node.js deye server bananor famework[login,appoinment,doctorlist etc]
import cors from 'cors'   // cors forntend theke backend call korte deye
import 'dotenv/config'  // .env file theke secret data neye
import  connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

//app config ... app ar basic set up
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin',adminRouter)
// localhost:4000/api/admin/add-doctor

app.get('/',(req,res)=>{
    res.send('API WORKING hello')
})

app.listen(port, ()=>console.log("Server Start ",port))