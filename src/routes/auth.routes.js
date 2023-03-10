const { Router } = require('express');
const router = Router();
const {register} = require('../controllers/auth.controller');
const { validationRegister, runValidation } = require('../middleware/validation.middleware');

router.post('/register', validationRegister, runValidation, register);

module.exports = router;
