const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
    {
      type: {
        type: String,

        required: "Enter a workout type",
      },
      name: {
        type: String,
  
        required: "Enter an name",
      },
      duration: {
        type: Number,
        required: "Enter a duration",
      },
      weight: {
        type: Number,
        required: "Enter a weight",
      },
      reps: {
        type: Number,
        required: "Enter your reps",
      },
      sets: {
        type: Number,
        required: "Enter the number of sets",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
