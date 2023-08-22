const User = require("../models/user.model");
const createError = require('http-errors');

 module.exports.profile = (req, res, next) => {
  res.render('user/profile', { 
    isOwner: req.user.role === "owner"
 })
}
