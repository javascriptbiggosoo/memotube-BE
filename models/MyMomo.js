const mongoose = require("mongoose");

const myMemoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VideoMemos",
  },
});

const MyMemo = mongoose.model("MyMemo", myMemoSchema);

module.exports = MyMemo;
