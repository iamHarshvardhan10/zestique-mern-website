import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    const { userName, email, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ userName, email, password: hashedPassword });

    try {

        await newUser.save()
        res.status(200).json({
            'Message': 'User Created Successfully'
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}



export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const validedUser = await User.findOne({ email })
        if (!validedUser) {
            res.send({ 'message': 'User Not Found' })
        }
        const validedPassword = bcryptjs.compareSync(password, validedUser.password)

        if (!validedPassword) {
            res.send({ 'Message': 'Wrong Credentails' })
        }

        const token = jwt.sign({ id: validedUser._id }, process.env.JWT_SECRET)
        const {password : pass , ...rest} = validedUser._doc;

        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest)

    } catch (error) {
        console.log(error)
    }

}


export const signOut = (req , res , next) => {
    try {
        res.clearCookie('access_token')
        res.status(204).json('Sign Out Successfuly')
    } catch (error) {
        console.log(error)
    }
}