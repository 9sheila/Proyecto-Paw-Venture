const Dog = require("../models/dog.model");
const createError = require('http-errors');

module.exports.create = (req, res, next) => {
    res.render('user/addDog')
}  

module.exports.doCreate = (req, res, next) => {
    req.body.owner = req.user;
    Dog.create(req.body)
        .then((newDog) => {
            res.redirect('/profile')
        })
        .catch(err => {
            if (err) {
                console.log(err)
                renderWithErrors(err.errors);
            } else {
                console.log(err)
                next(err)
            }
        })
}

// const data = {
//     ...req.body,
//     owner: req.user._id,
//     image: req.file ? req.file.path : undefined,
// }

// Dog.create(data)
// .then(dog => {
//     res.redirect('/profile');
//   })
// .catch(err => {
//   if (err instanceof mongoose.Error.ValidationError) {
//     console.log(err)
//     renderWithErrors(err.errors);
//   } else {
//     next(err);
//   }
// })


        
