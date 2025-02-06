const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register
exports.register = async(req, res)=>{
    const{name,email,password} = req.body;
    try {
        const user = await User.create({
            name,email,password
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message);
    }
}


//login
exports.login = async(req, res)=>{
    const{email,password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            res.status(400).json('user not found');
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            res.status(400).json('password not match');
        }
        const token = jwt.sign({id:user._id}, process.env.SECRET_KEY,{
            expiresIn:"5d"
        })
        res.cookie("token", token)
        res.status(200).json({
            user,
            token
        })
    } catch (error) {
        res.status(400).json(error.message);
    }
}


//user profile
exports.userProfile = async(req, res)=>{
    const user = await User.findById(req.user.id);
    if(!user){
        res.status(400).json('User not found');
    }
    res.status(200).json(user)
}