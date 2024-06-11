const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = async ({ email, password }) => {
  const existingUser = await User.findOne({ email }).lean();
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const salt = crypto.randomBytes(64).toString("base64");
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 100000, 64, "sha512")
    .toString("base64");

  const newUser = new User({
    email,
    hashedPassword,
    salt,
    mylist: [],
  });

  const result = await newUser.save();
  return result;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const hashedPassword = crypto
    .pbkdf2Sync(password, user.salt, 100000, 64, "sha512")
    .toString("base64");

  if (hashedPassword !== user.hashedPassword) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return token;
};

module.exports = {
  registerUser,
  loginUser,
};
