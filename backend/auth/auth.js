const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.auth = async(req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        res.status(400).json('token not found');
    }
    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        let user = await User.findById(decode.id)
        req.user = user;
        next();
    } catch (error) {
        res.status(400).json(error.message);
    }
}

exports.roles=(...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            res.status(400).json(`${req.user.role} is not allowed to access`)
        }
        next();
    }
}