const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(addThought)



router
    .route('/:id')
    .get(getThoughtById)
    .post(updateThought)
    .delete(removeThought);




router
    .route('/thoughts/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)



module.exports = router;