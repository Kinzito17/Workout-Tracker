const router = require("express").Router();
const Exercise = require("../models/exercisesModel.js");

router.post("/api/workouts", ({ body }, res) => {
    Exercise.create(body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Exercise.findByIdAndUpdate(params.id,
        { $push: { exercises: body } }, { new: true, runValidators: true })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Exercise.find({})
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Exercise.find({})
        //get rid of sort and add 
        .sort({ date: -1 })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.delete("/api/workouts", ({ body }, res) => {
    Exercise.findByIdAndRemove(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



module.exports = router;
