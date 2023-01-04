const jwt = require('jsonwebtoken');

exports.checkToken = (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return res.status(400).json({
          message: 'Invalid Token...',
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(401).json({
      message: 'Access Denied! Unauthorized User',
    });
  }
};
