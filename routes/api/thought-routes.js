const router = require('express').Router();


const {
    getallThought,
    getThoughtById,
    createThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getallThought)
    .post(createThought);


router
    .route('/:UserId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;