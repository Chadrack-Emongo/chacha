const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



// Middleware pour vérifier le token JWT
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
  
      jwt.verify(token, secretKey, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };

module.exports ={
    authenticateJWT
}