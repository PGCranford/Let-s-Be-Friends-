const router = require('express').Router();

//Import of API routes 

const apiRoutes = require('./api');

router.use('/api', apiRoutes)

// router.use((req, res) => {
//     res.status(200).send()
//     // else (
//     //     res.status(404).send('404 error'))
// });

module.exports = router;