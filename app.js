const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");
const mylistRouter = require("./routes/mylist");
const { connectToDatabase, closeDatabase } = require("./utils/dbMongoose");

dotenv.config(); // Load environment variables from .env file

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
  credentials: true, // Access-Control-Allow-Credentials 설정
};

app.use(cors(corsOptions));

app.use(express.json());

// app.use("/", (req, res) => {
//   res.send("CORS 설정 완료!");
// });

app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.use("/mylist", mylistRouter);

const PORT = process.env.PORT || 8080;

connectToDatabase().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  // 애플리케이션 종료 시 MongoDB 클라이언트 닫기
  const gracefulShutdown = async () => {
    console.log("Shutting down gracefully...");
    await closeDatabase();
    server.close(() => {
      console.log("Closed out remaining connections");
      process.exit(0);
    });
  };

  process.on("SIGTERM", gracefulShutdown);
  process.on("SIGINT", gracefulShutdown);
});
