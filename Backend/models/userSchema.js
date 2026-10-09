
const mongoose = require("mongoose");


// bcrypt password ko hash karne ke liye use hota hai
const bcrypt = require("bcrypt");


// Schema batata hai ki User document ke andar kaun-kaun se fields hongi
const userSchema = new mongoose.Schema({

    // User ka email
    email: {

        // Email ka data String type ka hoga
        type: String,

        // Email dena compulsory hai
        // Agar email nahi diya to ye error message aayega
        required: true,

        // Do users ka email same nahi ho sakta
        unique: true,
    },


    // User ka username
    username: {

        // Username String type ka hoga
        type: String,

        // Username dena compulsory hai
        required: true,
    },


    // User ka password
    password: {

        // Password String type ka hoga
        type: String,

        // Password dena compulsory hai
        required: true,
    },


    // User kab create hua, uska date/time
    createdAt: {

        // Date type ka data store hoga
        type: Date,

        // Agar createdAt nahi diya gaya,
        // to automatically current date/time store hoga
        default: new Date(),
    },
 
});


// "User" MongoDB collection ke saath kaam karne ke liye model hai
module.exports = mongoose.model("User", userSchema);