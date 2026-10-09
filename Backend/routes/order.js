const express = require('express');
const router = express.Router();


const verifyToken = require("../middleware/auth");

const {getAllOrders,newOrder} = require("../Controllers/user.js")

// New order create
router.post("/newOrder", verifyToken, newOrder);

// Current user's all orders
router.get("/allorders", verifyToken, getAllOrders);

module.exports = router;
