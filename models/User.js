const mongoose = require("mongoose");

// 스키마 작성
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  mylist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MyMemo",
    },
  ],
});

// 스키마로 모델 생성 후 내보내기
module.exports = mongoose.model("User", userSchema); // "User" 는 알아서 복수형으로 변환되어 users 컬렉션으로 생성됨
