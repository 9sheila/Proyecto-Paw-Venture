require('dotenv').config();

const mongoose = require('mongoose');
const dogs = require('../data/dog.json');
const Dog = require('../models/dog.model');


require('../config/db.config');

mongoose.connection.once('open', () => {
  console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);

  mongoose.connection.db
    .dropDatabase()
    .then(() => console.log(`- Database dropped`))
    .then(() => {
        User.create({})
            .then(userCreated {})
    })
    .catch((error) => console.error(error));
});
