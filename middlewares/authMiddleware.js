const jwtService = require("../services/jwtService");

async function authenticateUser(req, res, next) {
  const bearerToken = req.get('Authorization');
  const jwtToken = bearerToken?.split(' ')[1];
  if (!jwtToken) {
    res.status(401).json();
  } else {
    const userData = await jwtService.verifyToken(jwtToken);
    if (userData) {
      req.user = userData;
      next();
    } else {
      res.status(401).json();
    }
  }
}

module.exports = authenticateUser;
