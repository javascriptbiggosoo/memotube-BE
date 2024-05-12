const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/:vidId", (req, res) => {
  res.send("Like route");
});
router.delete("/:vidId", (req, res) => {
  res.send("Unlike route");
});

module.exports = router;
