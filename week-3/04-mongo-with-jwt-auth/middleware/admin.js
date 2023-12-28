const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decoded = jwt.verify(jwtToken, jwt_secret);
    if (decoded.username) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not authorized"
        })
    }
}

module.exports = adminMiddleware;