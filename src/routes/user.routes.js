const { Router } = require('express');
const { getAllUser } = require('../controllers/user.controlles');
const router = Router();


router.get('/', getAllUser);

module.exports = router;
