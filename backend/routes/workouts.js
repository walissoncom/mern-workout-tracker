const router = require('express').Router();
let Workout = require('../models/workout.model');

router.route('/').get((req, res) => {
    Workout.find()
        .then(workouts => res.json(workouts))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newWorkout = new Workout({
        username,
        description,
        duration,
        date
    });

    newWorkout.save()
        .then(() => res.json('Workout added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Workout.findById(req.params.id)
        .then(workout => res.json(workout))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Workout.findByIdAndDelete(req.params.id)
        .then(() => res.json('Workout deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Workout.findById(req.params.id)
        .then(workout => {
            workout.username = req.body.username;
            workout.description = req.body.description;
            workout.duration = Number(req.body.duration);
            workout.date = Date.parse(req.body.date);

            workout.save()
                .then(() => res.json('Workout updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))

})

module.exports = router;