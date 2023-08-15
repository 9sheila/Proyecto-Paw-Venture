const User = require("../models/user.model");
const createError = require('http-errors');

module.exports.profile = (req, res, next) => {
  res.render('user/profile', { user: req.user });
}

module.exports.getUserProfile = (req, res, next) => {
    User.findById(req.params.id)
      // .populate('artworks')
      .then(user => {
        if (user) {
          res.render('user/profile', { user });
        } else {
          next(createError(404, 'User not found'))
        }
      })
      .catch(next)
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
