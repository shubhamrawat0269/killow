const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { userService } = require("../services");
const isEmailTaken = require("../utils/isEmailTaken");

const signup = async (req, res) => {
  // console.log(req.body);
  try {
    const { username, email, password } = req.body;

    const userDetail = await isEmailTaken(email);

    if (userDetail) {
      return res.status(400).json({
        message: "Already Exist User",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const payload = {
      username,
      email,
      password: hashPassword,
    };

    await userService.createUser(payload);
    return res.status(201).json({
      message: "User Created Successfully",
      data: payload,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { validUser } = await userService.checkValidUser(email, password);

    if (!validUser?.email) {
      return res.status(401).json({
        message: `Wrong Credentials`,
      });
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({
        message: `Sign In Successfully`,
        data: validUser,
        token,
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

module.exports = {
  signup,
  signin,
};
