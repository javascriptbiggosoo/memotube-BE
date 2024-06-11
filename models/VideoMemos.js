const mongoose = require("mongoose");
const { memoSchema } = require("./Memo");

const videoMemosSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  memos: [memoSchema],
});

const VideoMemos = mongoose.model("VideoMemos", videoMemosSchema);

module.exports = { VideoMemos, videoMemosSchema };
