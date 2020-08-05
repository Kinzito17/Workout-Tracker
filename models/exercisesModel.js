const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    weight: {
        type: Number,
    },

    sets: {
        type: Number,
    },

    duration: {
        type: Number,
    },

    distance: {
        type: Number,
    },

    day: {
        type: Date,
        default: Date.now
    },

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
