const { connectToDatabase } = require("../utils/db");

const insertMyMemo = async (newMyMemo) => {
  const db = await connectToDatabase();
};

const selectMylist = async () => {
  const db = await connectToDatabase();
};

const selectMyMemoById = async (id) => {
  const db = await connectToDatabase();
};

const deleteMyMemoById = async (id) => {
  const db = await connectToDatabase();
};

module.exports = {
  insertMyMemo,
  selectMylist,
  selectMyMemoById,
  deleteMyMemoById,
};
