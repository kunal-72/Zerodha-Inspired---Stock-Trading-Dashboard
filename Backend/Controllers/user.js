const User = require("../models/userSchema");

const { status } = require("http-status");

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const Order = require("../models/orderSchema");




//login
module.exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(status.BAD_REQUEST).json({ message: "Enter username or password" })
    }

    try {
        let user = await User.findOne({ username: username });

        if (!user) {
            return res.status(status.NOT_FOUND).json({ message: "User not found" })
        }
        // console.log(password, user.password)

        let isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.status(status.UNAUTHORIZED).json({ message: "Invalid username or password" })
        }


        const token = jwt.sign(


            {
                userId: user._id,
                username: user.username
            },

            process.env.JWT_SECRET,

            { expiresIn: "1d" }
        );


        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        });


        return res.status(status.OK).json({ message: "Login successfully" })

    } catch (err) {
        return res.status(status.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong" })
    }
}


// Register
module.exports.register = async (req, res) => {


    const { email, username, password } = req.body

    try {


        const existingUser = await User.findOne({ username: username })
        if (existingUser) {
            return res.status(status.CONFLICT).json({ message: "User already exist" });
        }


        if (!email) {
            return res.status(status.BAD_REQUEST).json({ message: "Email is  required" })
        }
        if (!username) {
            return res.status(status.BAD_REQUEST).json({ message: "Username is  required" })
        }
        if (!password) {
            return res.status(status.BAD_REQUEST).json({ message: "Password is  required" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);



        const user = new User({
            email: email,
            username: username,
            password: hashedPassword
        })

        await user.save();


        res.status(status.CREATED).json({ message: "user registered" })

    } catch (err) {
        return res.status(status.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong" })
    }


}







module.exports.me = async (req, res) => {

    try {




        const userId = req.user.userId;

        const user = await User.findById(userId);

        user.password = undefined;

        if (!user) {

            return res.status(status.NOT_FOUND).json({
                message: "User not found"
            });

        }

        return res.status(status.OK).json({
            user: user
        });

    } catch (err) {

        return res.status(status.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong"
        });

    }
};


// CREATE NEW ORDER
module.exports.newOrder = async (req, res) => {

    try {

        const { name, qty, price, mode } = req.body;

        // Basic validation
        if (!name || !qty || !price || !mode) {

            return res.status(status.BAD_REQUEST).json({
                message: "All fields are required"
            });

        }



        const order = new Order({


            userId: req.user.userId,

            name: name,

            qty: Number(qty),

            price: Number(price),

            mode: mode

        });



        await order.save();


        return res.status(status.CREATED).json({

            message: "Order placed successfully",

            order: order

        });


    } catch (error) {

        console.log(error);

        return res.status(status.INTERNAL_SERVER_ERROR).json({

            message: "Something went wrong"

        });

    }

};


// GET CURRENT USER ORDERS
module.exports.getAllOrders = async (req, res) => {

    try {


        const orders = await Order.find({

            userId: req.user.userId

        }).sort({

            createdAt: -1

        });


        return res.status(status.OK).json({

            orders: orders

        });


    } catch (error) {

        console.log(error);

        return res.status(status.INTERNAL_SERVER_ERROR).json({

            message: "Something went wrong"

        });

    }

};


// logout
module.exports.logout = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });


    return res.status(200).json({
        message: "Logout successfully"
    });


};





