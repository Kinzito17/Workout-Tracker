const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: "Type of exercise is required"
    },

    name: {
        type: String,
        required: "Name if exercise is required"
    },

    weight: {
        type: Number,
    },

    sets: {
        type: Number,
    },

    reps: {
        type: Number,
    },

    duration: {
        type: Number,
        required: "Duration is required"
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
