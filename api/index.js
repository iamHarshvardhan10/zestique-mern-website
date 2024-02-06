import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

// PATH OF API ROUTE  FILES :- TEST API

import userRouter from './routes/user.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Successfully connected to MongoDB')
}).catch((error) => {
    console.log(error)
})

const app = express()

const Port = 3000


// API CALLING FROM OTHER FOLDER

// SIMPLE GET TEST API 
 
app.use('/api/user' , userRouter)

// created Server which is running on port number 3000

app.listen(Port, () => {
    console.log(`Server is Running on  ${Port}`)
})