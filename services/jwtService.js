const jwt = require("jsonwebtoken");
const User = require("../db/models/user");
const JWT_SECRET = process.env.JWT_SECRET;

const JWTService = {
  createToken: function (userData) {
    return jwt.sign(userData, JWT_SECRET);
  },
  verifyToken: async function (token) {
    const userData = jwt.verify(token, JWT_SECRET);
    if (await User.exists({ username: userData.username })) {
      return userData;
    } else {
      return null;
    }
  }
};

module.exports = JWTService;
