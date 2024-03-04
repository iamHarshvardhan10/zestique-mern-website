import express from 'express';
import { deleteUser, updateUserInfo } from '../controller/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router()

router.get('/test' , (req,res) => {
    res.send({
        message : 'Hello I am API of Test From user.route folder'
    })
})


router.post('/update/:id' ,verifyUser, updateUserInfo)

router.delete('/delete/:id' , verifyUser , deleteUser)
export default router;