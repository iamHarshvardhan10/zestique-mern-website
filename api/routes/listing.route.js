import express from 'express'
import { verifyUser } from '../utils/verifyUser.js'
import { createMenuListing, deleteListing,updateListing ,getListing} from '../controller/listing.controller.js'

const router = express.Router()

router.post('/create' ,verifyUser, createMenuListing)
router.delete('/delete/:id', verifyUser , deleteListing)
router.post('/update/:id', verifyUser , updateListing)
router.get('/getListing/:id',  getListing)

export default  router; 