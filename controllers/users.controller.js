const User = require("../models/user.model");
const createError = require('http-errors');

module.exports.profile = (req, res, next) => {
  res.render('user/profile');
}
module.exports.inscription = (req, res, next) => {
  res.render('user/inscription')
}

  // module.exports.checUserRole = (req, res, next) => {
  //   const roleToCheck = req.params.role;
  //   const userId = req.params.id;
  //   User.findOneBy(req.params.id)
  //     // .populate('artworks')
  //     .then(user => {
  //       if (user $ user.role ==roleToCheck) {
  //         return true
  //       } else {
  //         return false
  //       }
  //     })
  //     .catch(next)
  // }
