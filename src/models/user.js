const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{
        type:String,
        require:true,
        minLength:3,
        maxLength:20
    },
    lastname:{
         type:String,
        minLength:3,
        maxLength:20
    },
    emailId:{
         type:String,
        require:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true,
    },
    age:{
        type:Number,
        min:10,
        max:60,
    },
    role:{
        type:String,
        enum:['user', 'admin'],
        default:user
    }, 
    problemSolved:{
        type:[String]
    }
}, {
    timestamps:true
})

const User = mongoose.model("user", userSchema);
module.exports= User;
