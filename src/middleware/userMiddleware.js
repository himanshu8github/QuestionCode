const jwt = require("jsonwebtoken");

const userMiddleware = async (req, res, next) => {

    try{

        const{token} = req.cookies;

        if(!token)
            throw new Error ("Token is not Present");

       const payload = jwt.verify(token , process.env.JWT_KEY);

       const {_id} = payload;

       if(!_id){
          throw new Error ("Invalid Token")
       }

       const result = await user.findById(_id);

       if(!result)
        throw new Error("User Doesn't Exist" );

       const IsBlocked = await redisClient.exist(`token:${token}`);

       if(!IsBlocked)
       throw new Error ("Invalid token");
    
       req.result = result;
       next();


    }catch(err){
        res.send("Error " + err.message);

    }
}

module.exports = userMiddleware;