const JWT = require("jsonwebtoken")

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    }

    const token = JWT.sign(payload, process.env.JWT_SECRET);
    return token;
}

function decodeToken(token) {
    const user = JWT.verify(token, process.env.JWT_SECRET);
    return user;
}

module.exports = { generateToken, decodeToken };