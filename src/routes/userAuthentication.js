const express = require('express');
const userMiddleware = require("../middleware/userMiddleware");

const authRouter = express.Router();
const {register, login, logout} = require('../controllers/userAuth')

// user Registration
// user login
//logout
// get profile

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", userMiddleware, logout);
// authRouter.get("/getprofile", getProfile);


module.exports = authRouter;