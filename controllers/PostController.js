const dotenv = require("dotenv");
const { connectToDatabase } = require("../utils/db");
const { insertPost } = require("../services/postService");

dotenv.config();

const dummyVideoMemo = {
  id: "",
  videoId: "hnanNlDbsE4",
  memos: [
    {
      memoTime: "44:23",
      memoText: "아무 장수 챌린지",
      id: "0",
      createdAt: new Date().getTime(),
    },
    {
      memoTime: "1:27:22",
      memoText: "메오대전",
      id: "1",
      createdAt: new Date().getTime(),
    },
  ],
};
const dummyPost = {
  id: crypto.randomUUID(),
  thumbnail: "https://img.youtube.com/vi/hnanNlDbsE4/mqdefault.jpg",
  title: "침국지 드립 모음",
  content: dummyVideoMemo,
  author: "User",
  createdAt: new Date().getTime(),
  likeCount: 0,
  category: "humor",
  likes: { likeCount: 0, likedUser: [] },
};

const createPost = async (req, res) => {
  const newPost = dummyPost;

  try {
    const result = await insertPost(newPost);

    res.send("Post created successfully");
  } catch (error) {
    console.log(error);
    res.send("An error occurred while creating a post");
  }
};

const getPosts = async (req, res) => {};

const getPostById = async (req, res) => {};

const removePostById = async (req, res) => {};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  removePostById,
};
