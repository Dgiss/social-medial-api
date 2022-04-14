const mongoose = require('mongoose');
const UserModel = require('./user.js');
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: 'event name is required'
    },
    description: {
        type: String,
        required: 'Event description is required'
    },
    beginDate:{
        type: Date,
        default: Date.now
    },
    endDate: Date,
    location: String,
    coverPicture: String,
    visibility: {
        type: String,
        enum:['Private','Public'],
        required: true
    },

}, {
    collection:'event',
    // Bien optimiser la requête
    minimize: false,
    versionKey: false
}).set('toJSON',{
    transform: (doc, ret) => {
        // doc : Données qu'on récupère
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = Schema;