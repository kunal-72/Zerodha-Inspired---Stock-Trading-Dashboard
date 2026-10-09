const express = require('express');
const router = express.Router();

const { register , login, me, logout} = require('../Controllers/user.js')
const verifyToken = require("../middleware/auth");



router.route("/register").post(register);
router.route("/login").post(login);
router.get("/me", verifyToken, me);
router.post("/logout", logout);

module.exports = router;
