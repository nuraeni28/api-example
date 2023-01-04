const { Router } = require('express');
const router = Router();
const auth = require('./auth.routes.js');


router.use('/auth', auth);

router.all('*', (req, res) => {
  response(res, 404, false, 'The requested url cannot be found.');
});

module.exports = router;
