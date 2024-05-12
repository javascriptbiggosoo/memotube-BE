const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/users");
const cors = require("cors");

dotenv.config(); // Load environment variables from .env file
// console.log(process.env.PORT);

const app = express();
app.use("/", cors(), (req, res) => {
  res.send("cors!");
});

app.use("/users", userRouter);
app.use("/videos", require("./routes/videos"));

app.listen(6000);
