import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js';


export const updateUserInfo = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(res.send({ 'Status': '401', 'Message': 'Only Update Your Account!!' }))

    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)

        }
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password
            }
        }, { new: true })

        const { password, ...rest } = updateUser._doc

        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};


export const deleteUser = async (req , res , next) => {
    if(req.user.id !== req.params.id) return next(res.send({'status' : '401' , "message" : 'Own Account can delete'}))

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user deleted!!')
    } catch (error) {
        next(error)
    }
}