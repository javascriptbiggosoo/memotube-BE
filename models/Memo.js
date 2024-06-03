const mongoose = require("mongoose");

const memoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  memoTime: {
    type: String,
    required: true,
  },
  memoText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
});

const Memo = mongoose.model("Memo", memoSchema);

module.exports = Memo;
