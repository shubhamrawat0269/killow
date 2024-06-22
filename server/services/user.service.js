const bcryptjs = require("bcryptjs");
const UserModel = require("../models/user.model");

const createUser = async (user) => {
  await UserModel.create(user);
};

const checkValidUser = async (email, password) => {
  const validUser = await UserModel.findOne({ email });
  if (!validUser) return {};
  const validPassword = bcryptjs.compareSync(password, validUser.password);
  if (!validPassword) return {};

  return { validUser };
};

module.exports = { createUser, checkValidUser };
