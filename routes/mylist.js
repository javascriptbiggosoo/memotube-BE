const express = require("express");
const {
  createMyMemo,
  getMyList,
  getMyMemoById,
  removeMyMemoById,
} = require("../controllers/MylistController");

const router = express.Router();
router.use(express.json());

router.post("/", createMyMemo);
router.get("/", getMyList);
router.get("/:memoId", getMyMemoById);
router.put("/:memoId", (req, res) => {});
router.delete("/:memoId", removeMyMemoById);

module.exports = router;
