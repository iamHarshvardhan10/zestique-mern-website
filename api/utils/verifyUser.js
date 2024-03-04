import jwt from 'jsonwebtoken'
export const verifyUser = (req, res , next) => {
    const token = req.cookies.access_token

    if (!token) return res.send({ 'status': "401", "Message": "unthorized" })

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.send({ 'status': '500', 'Message': err.message })

        req.user = user
        next()
    })

}