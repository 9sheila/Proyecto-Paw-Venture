const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { REQUIRED_FIELD, } = require('../errors');
const role = require('../data/dog.json');

const dogSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, REQUIRED_FIELD]
    },
    race: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'https://static.vecteezy.com/system/resources/previews/006/099/824/original/dog-kawaii-face-free-vector.jpg',
      },
    age: {
      type: Number,
      required: true,
    },
    specialTreatments: {
      type: String,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    }, 
  },
  {
    timestamps: true,
   
  }
);

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;