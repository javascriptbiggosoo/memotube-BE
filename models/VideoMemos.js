const mongoose = require("mongoose");

const videoMemosSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  memos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Memo",
    },
  ],
});

const VideoMemos = mongoose.model("VideoMemos", videoMemosSchema);

module.exports = VideoMemos;
