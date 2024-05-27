const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const mongodbPassword = process.env.MONGO_DB_PASSWORD;
const url = `mongodb+srv://tbs01215:${mongodbPassword}@cluster0.ahczzmm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

let db;

const connectToDatabase = async () => {
  if (db) return db;
  const client = new MongoClient(url);
  await client.connect();
  db = client.db("memoTube");
  return db;
};

const closeDatabase = async () => {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
};

module.exports = {
  connectToDatabase,
  closeDatabase,
};
