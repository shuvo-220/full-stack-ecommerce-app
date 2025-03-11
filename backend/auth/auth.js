const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.auth = async (req, res, next) => {
  const token = req.cookies.token;
  console.log('token', token);
  if (!token) {
    return res.status(401).json('Please login to access this resource');
  }

  try {
    const decodedData = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await User.findById(decodedData.id);
    next();
    
  } catch (error) {
    console.log(error);
    return res.status(401).json('Invalid token');
  }
};

exports.roles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(400).json(`Role ${req.user.role} is not allowed to access this resource`);
    }
    next(); 
  };
};