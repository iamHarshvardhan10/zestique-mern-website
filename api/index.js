import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Successfully connected to MongoDB')
}).catch((error) => {
    console.log(error)
})

const app = express()

const Port = 3000


// created Server which is running on port number 3000

app.listen(Port, () => {
    console.log(`Server is Running on  ${Port}`)
})