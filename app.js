const express = require("express");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const cors = require("cors");

dotenv.config(); // Load environment variables from .env file
// console.log(process.env.PORT);

const app = express();
app.use("/", cors(), (req, res) => {
  res.send("cors!");
});

app.use("/auth", authRouter);
app.use("/videos", require("./routes/videos"));

app.listen(6000);
