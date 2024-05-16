const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/profile", (req, res) => {
  res.send("Profile route");
});

module.exports = router;
