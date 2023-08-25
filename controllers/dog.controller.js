const Dog = require("../models/dog.model");
const createError = require('http-errors');

module.exports.create = (req, res, next) => {
    res.render('dog/create',{ 
       createAction: "/dogs/create" });
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
module.exports.editFormGet = (req, res, next) => {
    const { id } = req.params;
    Dog.findById(id)
    .then(dog => {
      res.render('dog/edit', { 
        dog,
        editAction: "/dogs/:id/edit" });
    })
    .catch(err => next(err));
};
module.exports.formPost = (req, res, next) => {
    const { id } = req.params;
    Dog.findByIdAndUpdate(id, req.body, { new: true })
    .then(dog => {
      res.redirect(``);
    })
    .catch(err => next(err))
};


        
