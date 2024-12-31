const { decodeToken } = require("../service/user");

function checkAuth(req, res, next) {
    const bearerToken = req.headers["authorization"]

    const tokenValue = bearerToken.split(" ")[1];

    const user = decodeToken(tokenValue);
    req.user = user;
    next();
}

module.exports = checkAuth