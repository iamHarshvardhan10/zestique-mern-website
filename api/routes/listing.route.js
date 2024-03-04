import express from 'express'
import { verifyUser } from '../utils/verifyUser.js'
import { createMenuListing } from '../controller/listing.controller.js'

const router = express.Router()

router.post('/create' ,verifyUser, createMenuListing)


export default  router; 