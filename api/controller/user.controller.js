import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js';
import Menu from '../models/menu.model.js';


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

        if (!updateUser) {
            return res.status(404).json({ 'Status': '404', 'Message': 'User not found' });
        }


        const { password, ...rest } = updateUser._doc;
        

        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};


export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return res.send({ 'status': '401', "message": 'Own Account can delete' })

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user deleted!!')
    } catch (error) {
        console.log(error)
    }
}


export const getUserListing = async (req, res, next) => {
    try {
        const data = await Menu.find()
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}