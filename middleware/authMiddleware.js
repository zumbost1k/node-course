const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = (req, res, next) => {
 //only if this an options method
    if (req.method === 'OPTIONS') {
    next();
  }
  try {
    //get an token from headers by this path headers.authorization
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'User dont authorized' });
    }
    //encrypt token
    const decodedData = jwt.verify(token, secret);
    //add new info to req parametrs
    req.user = decodedData;
    //invoke next middleware
    next();
  } catch (error) {
    return res.status(403).json({ message: 'User dont authorized' });
  }
};
