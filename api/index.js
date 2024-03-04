import express from 'express';
import mongoose from 'mongoose';


import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'

// PATH OF API ROUTE  FILES :- TEST API

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Successfully connected to MongoDB')
}).catch((error) => {
    console.log(error)
})

const app = express()

const Port = 3000

app.use(express.json())
app.use(cookieParser())

// API CALLING FROM OTHER FOLDER

// SIMPLE GET TEST API 

app.use('/api/user', userRouter)

// SIGNUP POST API

app.use('/api/auth', authRouter)


// CREATE THE MENU LISTING
app.use('/api/listing', listingRouter)

// created Server which is running on port number 3000

app.listen(Port, () => {
    console.log(`Server is Running on  ${Port}`)
})  