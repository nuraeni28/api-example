const { Router } = require('express');
const router = Router();
const {register} = require('../controllers/auth.controllers');

router.post('/register', register);

module.exports = router;
