const mongoose = require("mongoose");

// 스키마 작성
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// 스키마로 모델 생성 후 내보내기
module.exports = mongoose.model("User", userSchema);
