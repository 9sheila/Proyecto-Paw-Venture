require('dotenv').config();

const mongoose = require('mongoose');
const dogs = require('../data/dog.json');
const Dog = require('../models/dog.model');
const User = require('../models/user.model');

require('../config/db.config');

mongoose.connection.once('open', () => {
  console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);

  mongoose.connection.db
    .dropDatabase()
    .then(() => console.log(`- Database dropped`))
    .then(() => User.create({
          name: 'Sheyla',
          email: 'sheyla@gmail.com',
          password: '12345678',
          role: 'owner'
        })
    )
    .then(userCreated => {
      console.log(`- Created user ${userCreated.name}`);
      dogs.forEach(dog => dog.owner = userCreated._id);
      return Dog.create(dogs);
    })
    .then(dogsCreated => {
      console.log(`- Created ${dogsCreated.length} dogs`);
    })
    .catch((error) => console.error(error))
    .finally(() => process.exit(0));
});