import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, "asimkalim123", {
        expiresIn: '30d'
    })

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: 'strict'
    })
}

export default generateToken
