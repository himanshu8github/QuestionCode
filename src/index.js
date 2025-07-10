const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/userAuthentication")


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/user', authRouter)


connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
  });
});