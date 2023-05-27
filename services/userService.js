const bcrypt = require("bcrypt");
const User = require("../db/models/user");
const { createToken } = require("./jwtService");

const UserService = {
  create: async function (user) {
    let password = user.password;
    let hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    const nuser = new User(user);
    await nuser.save();
    return this.get(nuser._id);
  },
  getAll: async function () {
    return User.find({}).select({ password: 0, __v: 0 });
  },
  get: async function (userId) {
    return User.findOne({ _id: userId }).select({ password: 0, __v: 0 });
  },
  destroy: async function (userId) {
    return await User.deleteOne({ _id: userId });
  },
  login: async function (loginData) {
    const user = await User.findOne({ username: loginData.username });
    const verified = await bcrypt.compare(loginData.password, user.password);
    if (verified) {
      return createToken({ username: user.username });
    } else {
      throw new Error('unauthorized');
    }
  }
};

module.exports = UserService;
