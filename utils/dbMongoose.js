const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongodbPassword = process.env.MONGO_DB_PASSWORD;
const url = `mongodb+srv://tbs01215:${mongodbPassword}@cluster0.ahczzmm.mongodb.net/memoTube?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

const closeDatabase = async () => {
  try {
    await mongoose.connection.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
  }
};

module.exports = {
  connectToDatabase,
  closeDatabase,
};
