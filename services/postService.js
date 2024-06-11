const Post = require("../models/Post");
const User = require("../models/User");

const insertPost = async (postData) => {
  const newPost = new Post(postData);
  const savedPost = await newPost.save();

  return savedPost;
};

const selectAllPosts = async () => {
  const posts = await Post.find();
  return posts;
};

const selectPostById = async (id) => {
  const post = await Post.findById(id);
  return post;
};

const deletePostById = async (id) => {
  const post = await Post.findByIdAndDelete(id);
  return post;
};

const updatePostById = async (id, postData) => {
  const updatedPost = await Post.findByIdAndUpdate(id, postData, { new: true });
  return updatedPost;
};

module.exports = {
  insertPost,
  selectAllPosts,
  selectPostById,
  deletePostById,
  updatePostById,
};
