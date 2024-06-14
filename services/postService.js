const Post = require("../models/Post");
const User = require("../models/User");

const insertPost = async (postData) => {
  const newPost = new Post(postData);
  const savedPost = await newPost.save();

  return savedPost;
};

// 클리어
const selectAllPosts = async (page, limit) => {
  const skip = (page - 1) * limit;
  const posts = await Post.find().skip(skip).limit(limit).exec();
  const totalPosts = await Post.countDocuments(); // 전체 포스트 수 계산

  return {
    posts,
    totalPosts,
  };
};

module.exports = {
  selectAllPosts,
};

// 클리어
const selectPostById = async (id) => {
  const post = await Post.findOne({ id });
  return post;
};

const deletePostById = async (id) => {
  const post = await Post.findOneAndDelete({ id });
  return post;
};

const updatePostById = async (id, postData) => {
  const updatedPost = await Post.findOneAndUpdate({ id }, postData, {
    new: true,
  });
  return updatedPost;
};

module.exports = {
  insertPost,
  selectAllPosts,
  selectPostById,
  deletePostById,
  updatePostById,
};
