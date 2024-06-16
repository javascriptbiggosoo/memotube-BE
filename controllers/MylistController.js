const {
  insertMyMemo,
  selectMylist,
  selectMyMemoById,
  deleteMyMemoById,
  updateMyMemoById,
} = require("../services/myListServices");
const decodeJwt = require("../utils/auth");

// 클리어
const createMyMemo = async (req, res) => {
  try {
    const user = decodeJwt(req, res);

    const myMemoData = req.body;
    myMemoData.userId = user.email; // Add user ID to myMemo data
    const newMyMemo = await insertMyMemo(myMemoData, user.email);
    res.status(201).json(newMyMemo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// 클리어
const getMyList = async (req, res) => {
  try {
    console.log("getMyList");
    const user = decodeJwt(req, res);

    const myList = await selectMylist(user.email);
    res.status(200).json(myList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMyMemoById = async (req, res) => {
  try {
    const user = decodeJwt(req, res);

    const myMemo = await selectMyMemoById(req.params.memoId);
    res.status(200).json(myMemo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const removeMyMemoById = async (req, res) => {
  try {
    const user = decodeJwt(req, res);

    const myMemo = await deleteMyMemoById(req.params.memoId, user.email);
    res.status(200).json(myMemo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const replaceMyMemoById = async (req, res) => {
  try {
    const user = decodeJwt(req, res);

    const myMemoData = req.body;
    const updatedMyMemo = await updateMyMemoById(req.params.memoId, myMemoData);
    res.status(200).json(updatedMyMemo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createMyMemo,
  getMyList,
  getMyMemoById,
  removeMyMemoById,
  replaceMyMemoById,
};
