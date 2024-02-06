import express from 'express';

const router = express.Router()

router.get('/test' , (req,res) => {
    res.send({
        message : 'Hello I am API of Test From user.route folder'
    })
})


export default router;