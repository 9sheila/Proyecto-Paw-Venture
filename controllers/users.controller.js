const Dog = require("../models/dog.model");
const User = require("../models/user.model");
const createError = require('http-errors');

 module.exports.profile = (req, res, next) => {
  Dog.find()
  .populate('owner')
  .limit(6)
  .then(dogs => {
    res.render('user/profile', { 
      isOwner: req.user.role === "owner",
      dogs
   })
  })
}
module.exports.userData =(req, res, next) => {
  const { id } = req.params;
  User.findById(id)
  .then(user => {
    res.render('user/publicData', {  
      user
   })
  })
  .catch(err => next(err));
};

