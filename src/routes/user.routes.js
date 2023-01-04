const { Router } = require('express');
const { getAllUser } = require('../controllers/user.controlles');
const { checkToken } = require('../middleware/verify.token.middleware');
const router = Router();


router.get('/', checkToken, getAllUser);

module.exports = router;
