const jwt = require("jsonwebtoken");
const User = require("../db/models/user");
const JWT_SECRET = process.env.JWT_SECRET;

const JWTService = {
  createToken: function (userData) {
    return jwt.sign(userData, JWT_SECRET);
  },
  verifyToken: async function (token) {
    const userData = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ username: userData.username });
    if (user) {
      return user.toObject();
    } else {
      return null;
    }
  }
};

module.exports = JWTService;
