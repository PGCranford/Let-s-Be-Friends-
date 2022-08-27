const router = require('express').Router();

//Import of API routes 

const apiRoutes = require('./api');

router.use('/api', apiRoutes)

router.use((req, res) => {
    res.status(404).json(err)
});

module.exports = router;