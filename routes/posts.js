const express = require("express");
const {
  getAllPosts,
  createPost,
  getPostById,
  removePostById,
} = require("../controllers/PostController");

const router = express.Router();
router.use(express.json());

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:postId", getPostById);
router.delete("/:postId", removePostById);

module.exports = router;
