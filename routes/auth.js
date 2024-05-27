const express = require("express");
const { register, login, logout } = require("../controllers/AuthController");

const router = express.Router();
router.use(express.json());

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

/* TODO: Implement these routes
router.post("/reset", (req, res) => {
  res.send("Forgot password route");
});
router.put("/reset", (req, res) => {
  res.send("Reset password route");
});
*/

module.exports = router;
