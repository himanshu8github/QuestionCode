const userSchemaa = require("../models/userModel")
const validator = require("../utils/validator")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const register = async(req, res) => {
    
    try{
        //validate the data

        validator(req.body);

       const {firstName, password, emailId} = req.body;

       req.body.password = await bcrypt.hash(password, 10);
        
           const user = await userSchemaa.create(req.body);

       const token = jwt.sign({_id:user._id, emailId:emailId}, process.env.JWT_KEY , {expiresIn: 60*60}) // sec

       res.cookie('token', token, {maxAge: 60*60*1000}); // in milisec
       res.status(201).send('user registered sucessfully');

  

    }
    catch(err){
        res.status(400).send('Error : ' + err);
    }

    
}

const login = async (req, res) => {

    try{

        const { emailId, password} = req.body ;

          if(!emailId) 
            throw new Error("Invalid Credentials");
        if(!password)
            throw new Error("Invalid Credentials");   

       const user = await userSchemaa.findOne({emailId});
     const match =  await bcrypt.compare(password, user.password);
     

     if(!match)
        throw new Error("Invalid Credentials ")

       const token = jwt.sign({_id:user._id, emailId:emailId}, process.env.JWT_KEY , {expiresIn: 60*60}) // sec
       res.cookie('token', token, {maxAge: 60*60*1000}); // in milisec\
       res.status(200).send("Logged in successfully");



    }catch(err){
        res.status(401).send("Error : " + err)

    }
}

const logout = async (req, res) => {

    try{
        res.clearCookie('token');
       res.send("Logged out");

    }catch(err){
          
    }
}

module.exports = {register, login, logout}