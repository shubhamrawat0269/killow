const UserModel = require("../models/user.model");

const createUser = async (user) => {
  await UserModel.create(user);
};

module.exports = { createUser };
