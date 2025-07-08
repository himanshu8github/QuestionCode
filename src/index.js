const express = require('express');
require('dotenv').config();
const data = require('./config/db')
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json());
app.use(cookieParser());

data().
then(async () => {
    app.listen(process.env.PORT, () => {
    console.log("Server is runnng on port" + process.env.PORT)
    })
})
.catch(err => console.log("Error Occured : " + err));