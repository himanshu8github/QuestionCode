const express = require('express');

const authRouter = express.Router();
const {register, login, logout} = require('../controllers/userAuth')

// user Registration
// user login
//logout
// get profile

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
// authRouter.get("/getprofile", getProfile);


module.exports = authRouter;