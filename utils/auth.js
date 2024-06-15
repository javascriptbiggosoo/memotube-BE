const jwt = require("jsonwebtoken");

function decodeJwt(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new ReferenceError("헤더에 Authorization이 없습니다.");
    }
    const token = authHeader.split(" ")[1]; // Bearer 제거

    // console.log(token);

    if (!token) {
      throw new ReferenceError("토큰이 없습니다.");
    }

    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw error;
  }
}

module.exports = decodeJwt;
