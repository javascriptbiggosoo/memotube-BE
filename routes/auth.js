const express = require("express");
const { register, login } = require("../controllers/AuthController");

const router = express.Router();
router.use(express.json());

router.post("/register", register);

router.post("/login", login);

/* TODO: Implement these routes
router.post("/reset", (req, res) => {
  res.send("Forgot password route");
});
router.put("/reset", (req, res) => {
  res.send("Reset password route");
});
*/

module.exports = router;
