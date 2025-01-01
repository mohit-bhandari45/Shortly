const { decodeToken } = require("../service/user");

function checkAuth(req, res, next) {
    const bearerToken = req.headers["authorization"]
    if (!bearerToken) {
        return res.status(401).json({ msg: "UnAuthorized" });
    }

    const tokenValue = bearerToken.split(" ")[1];

    const user = decodeToken(tokenValue);
    if (!user) {
        return res.status(401).json({ msg: "User Not Found" });
    }
    req.user = user;
    next();
}

module.exports = checkAuth