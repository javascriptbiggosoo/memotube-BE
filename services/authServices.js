const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { connectToDatabase } = require("../utils/db");

const insertUser = async (newUser) => {
  const db = await connectToDatabase();
  const users = db.collection("users");
  const result = await users.insertOne(newUser);
  return result;
};
const selectUserByEmail = async (email) => {
  const db = await connectToDatabase();
  const users = db.collection("users");
  const user = await users.findOne({ email });
  return user;
};

const registerUser = async ({ email, password }) => {
  const existingUser = await selectUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const salt = crypto.randomBytes(64).toString("base64");
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 100000, 64, "sha512")
    .toString("base64");

  const newUser = {
    email,
    hashedPassword,
    salt,
    mylist: [],
  };

  const result = await insertUser(newUser);
  return result;
};

const loginUser = async ({ email, password }) => {
  const user = await selectUserByEmail(email);
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
    expiresIn: "10000h",
  });

  // 이 토큰엔 인코딩된 사용자 정보(여기선 email)와 암호화된 서명이 들어있음. 나중에 서버에서 이 토큰을 받으면 서명을 확인하고 사용자 정보를 추출할 수 있음.
  return token;
};

module.exports = {
  insertUser,
  selectUserByEmail,
  registerUser,
  loginUser,
};
