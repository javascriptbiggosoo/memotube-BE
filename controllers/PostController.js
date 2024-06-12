const {
  insertPost,
  selectAllPosts,
  selectPostById,
  deletePostById,
  updatePostById,
} = require("../services/postService");
const decodeJwt = require("../utils/auth");

const createPost = async (req, res) => {
  const user = decodeJwt(req, res);
  if (!user) return; // 로그인 안했을 때

  try {
    const postData = { ...req.body, author: user.email };
    const newPost = await insertPost(postData);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await selectAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await selectPostById(req.params.postId);
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const removePostById = async (req, res) => {
  try {
    const post = await deletePostById(req.params.postId);
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const replacePostById = async (req, res) => {
  try {
    const postData = req.body;
    const updatedPost = await updatePostById(req.params.postId, postData);
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  removePostById,
  replacePostById,
};
