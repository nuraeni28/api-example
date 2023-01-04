const { Router } = require('express');
const router = Router();
const auth = require('./auth.routes.js');
const user = require('./user.routes.js');

router.use('/auth', auth);
router.use('/user', user )

module.exports = router;
