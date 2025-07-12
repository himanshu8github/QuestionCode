Flow of project
Backend =>
Type of User = normal user / admin(have access to create problem )
We Required API For - 
1.User Authentication
2.For Problems creation
3.Code submission
4.DSA problem


1. Build User Auth System(API)
Register
Login
Logout
OTP verification
Google Signup
Github fetch of user
Email verify
reset pass
forgot pass

/**Email-Verification**/
-> it send https/GET request to backend with a token , then 

/**MongoDB-Schema**/
1. User Schema/Admin Schema
(firstname, lastname, role(user/admin), email, pass, solveed problems),images
2.Problem Schema ->
 problem ID, title, Runtestcases, hiddentestcases, initial code(with language),
accepted sol, real sol, hiddenouputTestcases, videoSol
3.SubmitProblemSchema->
userSol, ProbID, Sol(accepted/rejected)

/**Auth sysytem (login, signup, )**/
1. UserAuthentication

create route folder => defines routes with func(register,login,logout,getProfile),
then create another file in controller where define those function,
then in that file first we import Schema,
then we write async function and implement try{}.catch{}.block..., where we require user schema from req.body,
then create another file in utils named with validator.js,
where we validate the input(so we have to install the library first) =>
 (npm i validator),
 then we write some code and use .every() func
 then we install bcrypt lib to convert org pass to hashed pass to store it on DB
 then we instal ( npm i jsonwebtoken) => use jwt.sign, define what we store like emailid only , then we have secretkey, also i define in how much time will the token expire, 
 then we use a jwt secret key  (node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
also we dont have to check that user is exisit or not because we already define it in schema where we marked email:unique

=> now we implement logout feature
first i create another file name userMiddleware where I,
 get token from cookies,
then VERIFY jwt token,
then find user by id,
then we use another lib Redis,
npm install redis, then we implement logout feature, where we first get token from body , then  Block the token using Redis, then clear the cookies, then we check all routes with the help of Postman, ALL Set

=> implement a feature in /register route that if anyone come with this route then always that person be a user
=> also create another route admin/register => throgh this the admin registered another admin using adminMiddleware 
=> aftewr this we define another schema for problem,
then we create another file for route for problem where we define routes for 
// routes for => // create //fetch // update //delete , 





