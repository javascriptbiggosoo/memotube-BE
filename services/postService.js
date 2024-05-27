const { connectToDatabase } = require("../utils/db");

const insertPost = async (newPost) => {
  const db = await connectToDatabase();
  const posts = db.collection("posts");
  const result = await posts.insertOne(newPost);
  return result;
};

const selectPosts = async () => {
  const db = await connectToDatabase();
  const posts = db.collection("posts");
  const result = await posts.find({}).toArray();
  return result;
};

const selectPostById = async (id) => {
  const db = await connectToDatabase();
  const posts = db.collection("posts");
  const result = await posts.findOne({ id });
  return result;
};

const deletePostById = async (id) => {
  const db = await connectToDatabase();
  const posts = db.collection("posts");
  const result = await posts.deleteOne({ id });
  return result;
};

module.exports = {
  insertPost,
  selectPosts,
  selectPostById,
  deletePostById,
};
