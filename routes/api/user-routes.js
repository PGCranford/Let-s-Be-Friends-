const router = require('express').Router();


const {
    getallUser,
    getUserById,
    createUser
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getallUser)
    .post(createUser);


router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;

