const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .get(getThoughtById)
    .post(addThought)
    .delete(removeThought);



router
    .route('/:thoughtId/reactions')
    .put(addReaction)
    .delete(removeReaction)



router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction)



module.exports = router;