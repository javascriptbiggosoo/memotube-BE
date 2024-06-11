const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema({
  likeCount: {
    type: Number,
    required: true,
  },
  likedUser: [
    {
      type: String,
    },
  ],
});

const postSchema = new mongoose.Schema({
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
  content: videoMemosSchema,
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
  likes: likesSchema,
  category: {
    type: String,
    required: false,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
