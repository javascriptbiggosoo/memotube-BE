const express = require("express");
const { createMyMemo, getMyList } = require("../controllers/MylistController");

const router = express.Router();
router.use(express.json());

router.post("/", createMyMemo);

router.get("/", getMyList);

router.get("/:memoId", (req, res) => {});

router.put("/:memoId", (req, res) => {});

router.delete("/:memoId", (req, res) => {});

module.exports = router;
