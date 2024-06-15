const express = require("express");
const {
  getAllPosts,
  createPost,
  getPostById,
  removePostById,
  likePostController,
  unlikePostController,
} = require("../controllers/PostController");

const router = express.Router();
router.use(express.json());

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:postId", getPostById);
router.delete("/:postId", removePostById);
router.post("/:postId/like", likePostController);
router.post("/:postId/unlike", unlikePostController);

module.exports = router;
