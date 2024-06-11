const mongoose = require("mongoose");
const { videoMemosSchema } = require("./VideoMemos");

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
  content: videoMemosSchema,
});

const MyMemo = mongoose.model("MyMemo", myMemoSchema);

module.exports = MyMemo;
