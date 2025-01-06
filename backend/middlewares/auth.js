const { decodeToken } = require("../service/user");

function checkAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token missing or malformed' });
    }

    const token = authHeader.split(' ')[1];
    console.log(token);

    try {
        const user = decodeToken(token);
        req.user = user;

        next();
    } catch (err) {
        const statusCode = err.message === "Token expired" ? 401 : 403;
        res.status(statusCode).json({ message: err.message });
    }
}

module.exports = checkAuth;
