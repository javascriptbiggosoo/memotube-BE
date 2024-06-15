const {
  insertPost,
  selectAllPosts,
  selectPostById,
  deletePostById,
  updatePostById,
  likePost,
  unlikePost,
} = require("../services/postService");
const decodeJwt = require("../utils/auth");

const createPost = async (req, res) => {
  try {
    const user = decodeJwt(req, res);

    const postData = { ...req.body, author: user.email };
    const newPost = await insertPost(postData);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllPosts = async (req, res) => {
  const { page, limit } = req.query;

  try {
    const { posts, totalPosts } = await selectAllPosts(page, limit);
    res.status(200).json({ posts, totalPosts });
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
    const user = decodeJwt(req, res);

    const post = await deletePostById(req.params.postId);
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const replacePostById = async (req, res) => {
  try {
    const user = decodeJwt(req, res);

    const postData = req.body;
    const updatedPost = await updatePostById(req.params.postId, postData);
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const likePostController = async (req, res) => {
  try {
    const user = decodeJwt(req, res);

    const { postId } = req.params;
    const updatedPost = await likePost(postId, user.email);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const unlikePostController = async (req, res) => {
  try {
    const user = decodeJwt(req, res);

    const { postId } = req.params;
    const updatedPost = await unlikePost(postId, user._id);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  removePostById,
  replacePostById,
  likePostController,
  unlikePostController,
};
