const { registerUser, loginUser } = require("../services/authServices");

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    await registerUser({ email, password });
    res.status(201).json({ message: "회원가입 성공" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser({ email, password });
    res.status(200).json({ message: "로그인 성공", token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "이메일 또는 비밀번호가 잘못되었습니다." });
  }
};

const logout = async (req, res) => {
  res.status(200).json({ message: "로그아웃 성공" });
};

module.exports = {
  register,
  login,
  logout,
};
