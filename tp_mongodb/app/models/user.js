const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required'
  }
}, {
   collection: 'user',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id;
  }
})

module.exports = Schema;
