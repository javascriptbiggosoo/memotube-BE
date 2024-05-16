const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/register", (req, res) => {
  res.send("Register route");
});
router.post("/login", (req, res) => {
  res.send("Login route");
});

router.post("/logout", (req, res) => {
  res.send("Logout route");
});

/* TODO: Implement these routes
router.post("/reset", (req, res) => {
  res.send("Forgot password route");
});
router.put("/reset", (req, res) => {
  res.send("Reset password route");
});
*/

module.exports = router;
