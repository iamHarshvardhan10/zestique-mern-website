import express from 'express'
import { signup , signIn, signOut } from '../controller/auth.controller.js'


const router = express.Router()

router.post('/signup' , signup)
router.post('/signIn' , signIn)
router.get('/signOut' , signOut)

export default router;