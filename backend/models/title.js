const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TitleSchema = new Schema({
    primaryTitle: {
        type: String,
        required: true,
    }, 
    secondaryTitle: {
        type: String,
        required: true,
    },
    isAdult: {
        type: Number,
    },
    genre: {
        type: String,
    }
});

module.exports = mongoose.model('title', TitleSchema, 'title');
