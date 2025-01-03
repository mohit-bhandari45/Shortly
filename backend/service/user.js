const JWT = require("jsonwebtoken");

const options = {
    expiresIn: "1h"
}

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };

    const token = JWT.sign(payload, process.env.JWT_SECRET, options);
    return token;
}

function decodeToken(token) {
    const user = JWT.verify(token, process.env.JWT_SECRET);
    return user;
}

module.exports = { generateToken, decodeToken };
