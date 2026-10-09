
const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {

    // Cookie se token nikalo
    const token = req.cookies.token;


    // Token nahi mila
    if (!token) {

        return res.status(401).json({
            message: "Please login first"
        });

    }


    try {

        // JWT verify karo
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        // Decoded user information
        // request ke andar store kar do
        req.user = decoded;


        // Next middleware/controller par jao
        next();


    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });

    }

};


module.exports = verifyToken;

